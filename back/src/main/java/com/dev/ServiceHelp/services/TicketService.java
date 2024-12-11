package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.constants.TicketHistoryConstants;
import com.dev.ServiceHelp.dto.TicketDTO;
import com.dev.ServiceHelp.dto.TicketHistoryDTO;
import com.dev.ServiceHelp.dto.TicketSimpleDTO;
import com.dev.ServiceHelp.dto.TicketUpdateDTO;
import com.dev.ServiceHelp.entities.*;
import com.dev.ServiceHelp.enums.NoteType;
import com.dev.ServiceHelp.enums.StatusTicket;
import com.dev.ServiceHelp.mappers.TicketHistoryMapper;
import com.dev.ServiceHelp.mappers.TicketMapper;
import com.dev.ServiceHelp.projections.*;
import com.dev.ServiceHelp.repository.*;
import com.dev.ServiceHelp.services.exceptions.ResourceNotFoundException;
import com.dev.ServiceHelp.services.exceptions.TicketStatusException;
import com.dev.ServiceHelp.strategy.StatusTicketStrategy;
import com.dev.ServiceHelp.strategy.factory.StatusTicketStrategyFactory;
import com.dev.ServiceHelp.utils.ResourceUtil;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.util.*;

@RequiredArgsConstructor
@Service
public class TicketService {

    private final UserService userService;
    private final TicketHistoryService ticketHistoryService;

    private final TicketMapper ticketMapper;
    private final TicketHistoryMapper ticketHistoryMapper;

    private final StatusTicketStrategyFactory strategyFactory;

    private final TicketRepository ticketRepository;
    private final TypeRequestRepository typeRequestRepository;
    private final CategoryTicketRepository categoryTicketRepository;
    private final SolvingAreaRepository solvingAreaRepository;
    private final SLARepository slaRepository;
    private final TicketHistoryRepository ticketHistoryRepository;
    private final AttachmentRepository attachmentRepository;
    private final UserRepository userRepository;

    private final ResourceUtil resourceUtil;

    @Transactional
    public TicketSimpleDTO createTicket(TicketSimpleDTO ticketSimpleDTO) {

        TypeRequest typeRequest = ResourceUtil.getOrThrow(
                typeRequestRepository.findById(ticketSimpleDTO.getTypeRequest().getId()),
                "TypeRequest with ID " + ticketSimpleDTO.getTypeRequest().getId() + " not found");

        SLA sla = ResourceUtil.getOrThrow(
                slaRepository.findById(ticketSimpleDTO.getSla().getId()),
                "SLA with ID " + ticketSimpleDTO.getSla().getId() + " not found");

        CategoryTicket categoryTicket = ResourceUtil.getOrThrow(
                categoryTicketRepository.findById(ticketSimpleDTO.getCategoryTicket().getId()),
                "CategoryTicket with ID " + ticketSimpleDTO.getCategoryTicket().getId() + " not found");

        SolvingArea solvingArea = ResourceUtil.getOrThrow(
                solvingAreaRepository.findById(categoryTicket.getSolvingArea().getId()),
                "SolvingArea with ID " + categoryTicket.getSolvingArea().getId() + " not found");

        Ticket ticket = ticketMapper.toInitializedTicket(ticketSimpleDTO, typeRequest, sla,
                categoryTicket, solvingArea,
                userService.authenticated(), resourceUtil);

        ticket = ticketRepository.save(ticket);

        TicketHistoryDTO ticketHistoryDTO = ticketHistoryMapper.createDefaultTicketHistoryDTO(ticket,
                TicketHistoryConstants.TICKET_OPENED_DESCRIPTION, NoteType.SYSTEM_GENERATED);
        ticketHistoryService.addTicketHistoryManually(ticketHistoryDTO);

        return ticketMapper.toTicketSimpleDTO(ticket);
    }

    @Transactional(readOnly = true)
    public Page<TicketSimpleDTO> getTicketsByCriteria(Long id, String registrationDate, StatusTicket status, Long area, Long category, Long type, Long sla,
                                                      Boolean ticketsAssignedToMe,
                                                      Boolean myOpenTickets,
                                                      Boolean hasTicketsInMyArea,
                                                      Pageable pageable) {

        User authenticatedUser = userService.authenticated();

        Long technicianID = resolverId(ticketsAssignedToMe, authenticatedUser.getId());
        Long requesterID = resolverId(myOpenTickets, authenticatedUser.getId());
        Long solvingAreaID = resolverId(hasTicketsInMyArea, authenticatedUser.getSolvingArea().getId());

        SolvingArea solvingArea = findEntityById(area, solvingAreaRepository);
        CategoryTicket categoryTicket = findEntityById(category, categoryTicketRepository);
        TypeRequest typeRequest = findEntityById(type, typeRequestRepository);
        SLA Sla = findEntityById(sla, slaRepository);

        Page<Ticket> ticketResults = ticketRepository.searchTicketsByParams(id, registrationDate, status, solvingArea, categoryTicket,
                typeRequest, Sla,
                technicianID,
                requesterID,
                solvingAreaID,
                pageable);

        return ticketResults.map(ticketMapper::toTicketSimpleDTO);
    }

    @Transactional
    public TicketDTO getTicketById(Long id) {
        Ticket ticket = ResourceUtil.getOrThrow(
                ticketRepository.findById(id),
                "Ticket with ID " + id + " not found");

        Set<TicketHistory> ticketHistoriesResult = ticketHistoryRepository.findByTicketId(ticket.getId());
        ticket.setTicketHistories(ticketHistoriesResult);

        Set<Attachment> attachmentsResult = attachmentRepository.findByTicketId(ticket.getId());
        ticket.setAttachments(attachmentsResult);

        return ticketMapper.toTicketDTO(ticket);
    }


    @Transactional
    public TicketSimpleDTO updateTicketData(Long id, TicketUpdateDTO ticketUpdateDTO) {
        try {

            Ticket ticket = ticketRepository.getReferenceById(id);

            if (EnumSet.of(StatusTicket.CANCELED, StatusTicket.FINISHED).contains(ticket.getStatusTicket())) {
                throw new TicketStatusException("Ticket CANCELED OR FINISHED CANNOT BE CHANGED");
            }

            if (ticketUpdateDTO.getTypeRequest() != null) {
                TypeRequest typeRequest = ResourceUtil.getOrThrow(
                        typeRequestRepository.findById(ticketUpdateDTO.getTypeRequest().getId()),
                        "TypeRequest with ID " + ticketUpdateDTO.getTypeRequest().getId() + " not found");
                ticket.setTypeRequest(typeRequest);

                executeAddTicketHistory(ticket, TicketHistoryConstants.TICKET_TYPE_REQUEST_DESCRIPTION, NoteType.SYSTEM_GENERATED);
            }

            if (ticketUpdateDTO.getSla() != null) {
                SLA sla = ResourceUtil.getOrThrow(
                        slaRepository.findById(ticketUpdateDTO.getSla().getId()),
                        "SLA with ID " + ticketUpdateDTO.getSla().getId() + " not found");
                ticket.setSla(sla);

                executeAddTicketHistory(ticket, TicketHistoryConstants.TICKET_SLA_DESCRIPTION, NoteType.SYSTEM_GENERATED);
            }

            if (ticketUpdateDTO.getCategoryTicket() != null) {

                CategoryTicket categoryTicket = ResourceUtil.getOrThrow(
                        categoryTicketRepository.findById(ticketUpdateDTO.getCategoryTicket().getId()),
                        "CategoryTicket with ID " + ticketUpdateDTO.getCategoryTicket().getId() + " not found");

                SolvingArea solvingArea = ResourceUtil.getOrThrow(
                        solvingAreaRepository.findById(categoryTicket.getSolvingArea().getId()),
                        "SolvingArea with ID " + ticketUpdateDTO.getCategoryTicket().getSolvingAreaDTO().getId() + " not found");

                ticket.setCategoryTicket(categoryTicket);
                ticket.getCategoryTicket().setSolvingArea(solvingArea);

                executeAddTicketHistory(ticket, TicketHistoryConstants.TICKET_CATEGORY_DESCRIPTION, NoteType.SYSTEM_GENERATED);
            }

            if (ticketUpdateDTO.getTechnician() != null) {
                User technician = ResourceUtil.getOrThrow(
                        userRepository.findById(ticketUpdateDTO.getTechnician().getId()),
                        "User with ID " + ticketUpdateDTO.getTechnician().getId() + " not found");
                ticket.setTechnician(technician);

                executeAddTicketHistory(ticket, TicketHistoryConstants.TICKET_TECHNICIAN_DESCRIPTION, NoteType.SYSTEM_GENERATED);
            }

            if (ticketUpdateDTO.getStatusTicket() != null) {
                ticket.setStatusTicket(ticketUpdateDTO.getStatusTicket());

                StatusTicketStrategy strategy = strategyFactory.getStrategy(ticket.getStatusTicket());

                strategy.applyStatus(ticket, ticketUpdateDTO);
            }

            ticket = ticketRepository.save(ticket);
            return ticketMapper.toTicketSimpleDTO(ticket);

        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id not found " + id);
        }
    }

    private void executeAddTicketHistory(Ticket ticket, String description, NoteType noteType) {
        TicketHistoryDTO ticketHistoryDTO = ticketHistoryMapper.createDefaultTicketHistoryDTO(ticket,
                description, noteType);
        ticketHistoryService.addTicketHistoryManually(ticketHistoryDTO);
    }

    @Transactional(readOnly = true)
    public ActivityPanelSummaryTicketsProjection getActivityPanelSummaryTickets() throws ParseException {
        return ticketRepository.ActivityPanelSummaryTickets();
    }

    @Transactional(readOnly = true)
    public ActivityPanelSummaryPercentTicketsProjection getActivityPanelSummaryPercentTickets() throws ParseException {
        return ticketRepository.ActivityPanelSummaryPercentTickets();
    }

    @Transactional(readOnly = true)
    public ActivityPanelSummaryTicketsByUrgencyProjection getActivityPanelSummaryTicketsByUrgency() throws ParseException {
        return ticketRepository.ActivityPanelSummaryTicketsByUrgency();
    }

    @Transactional(readOnly = true)
    public ActivityPanelSummaryTicketsValueByUrgencyProjection getActivityPanelSummaryTicketsValueByUrgency() throws ParseException {
        return ticketRepository.ActivityPanelSummaryTicketsValueByUrgency();
    }

    @Transactional(readOnly = true)
    public ActivityPanelTimeMediumResolution getActivityPanelTimeMediumResolution() throws ParseException {
        return ticketRepository.activityPanelTimeMediumResolution();
    }

    @Transactional(readOnly = true)
    public List<ActivityPanelServiceByDayProjection> getActivityPanelServiceByDay() throws ParseException {
        return ticketRepository.activityPanelServiceByDay();
    }

    @Transactional(readOnly = true)
    public ActivityPanelPercentOnSlaProjection getActivityPanelPercentOnSla() throws ParseException {
        return ticketRepository.activityPanelPercentOnSla();
    }

    @Transactional(readOnly = true)
    public activityPanelAverageFirstResponseTimeProjection getActivityPanelAverageFirstResponseTime() throws ParseException {
        return ticketRepository.activityPanelAverageFirstResponseTime();
    }

    private Long resolverId(Boolean value, Long id) {
        return Boolean.TRUE.equals(value) ? id : null;
    }

    private <T> T findEntityById(Long id, JpaRepository<T, Long> repository) {
        return id != null ? repository.findById(id).orElse(null) : null;
    }
}
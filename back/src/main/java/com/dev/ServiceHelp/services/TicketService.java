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
import com.dev.ServiceHelp.repository.*;
import com.dev.ServiceHelp.services.exceptions.ResourceNotFoundException;
import com.dev.ServiceHelp.services.exceptions.TicketStatusException;
import com.dev.ServiceHelp.utils.ResourceUtil;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.EnumSet;
import java.util.Set;

@RequiredArgsConstructor
@Service
public class TicketService {

    private final UserService userService;
    private final TicketHistoryService ticketHistoryService;

    private final TicketMapper ticketMapper;
    private final TicketHistoryMapper ticketHistoryMapper;

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

        Ticket ticket = ticketMapper.toTicketEntity(ticketSimpleDTO);

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

        ticket.setTypeRequest(typeRequest);
        ticket.setSla(sla);
        ticket.setCategoryTicket(categoryTicket);
        ticket.setSolvingArea(solvingArea);
        ticket.setRequester(userService.authenticated());
        ticket.setRegistrationDate(Instant.now());
        ticket.setDueDate(resourceUtil.calculateDueDate(ticket.getRegistrationDate(), sla.getResponseTime()));
        ticket = ticketRepository.save(ticket);

        TicketHistoryDTO ticketHistoryDTO = ticketHistoryMapper.createDefaultTicketHistoryDTO(ticket,
                TicketHistoryConstants.TICKET_OPENED_DESCRIPTION, NoteType.SYSTEM_GENERATED);

        ticketHistoryService.addTicketHistoryManually(ticketHistoryDTO);

        return ticketMapper.toTicketSimpleDTO(ticket);
    }

    @Transactional(readOnly = true)
    public Page<TicketSimpleDTO> getTicketsByCriteria(Long id, String registrationDate, StatusTicket status, Long area, Long category, Long type, Long sla, Pageable pageable) {

        SolvingArea solvingArea = area != null ? solvingAreaRepository.findById(area).orElse(null) : null;
        CategoryTicket categoryTicket = category != null ? categoryTicketRepository.findById(category).orElse(null) : null;
        TypeRequest typeRequest = type != null ? typeRequestRepository.findById(type).orElse(null) : null;
        SLA Sla = sla != null ? slaRepository.findById(sla).orElse(null) : null;

        Page<Ticket> ticketResults = ticketRepository.searchTicketsByParams(id, registrationDate, status, solvingArea, categoryTicket, typeRequest, Sla, pageable);

        return ticketResults.map(ticket -> ticketMapper.toTicketSimpleDTO(ticket));
    }

    @Transactional(readOnly = true)
    public TicketDTO getTicketById(Long id) {
        Ticket ticket = ticketRepository.findById(id)
                .orElseThrow(
                        () -> new ResourceNotFoundException("ticket not found"));

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

            //verificar se o chamado esta com status de (FINISHED / CANCELED) nesse caso não prosseguir.
            if (EnumSet.of(StatusTicket.CANCELED, StatusTicket.FINISHED).contains(ticket.getStatusTicket())) {
                throw new TicketStatusException("Ticket CANCELED OR FINISHED CANNOT BE CHANGED");
            }

            // Pode mudar avontade (problema/incidente/PM/Solicitação)
            if (ticketUpdateDTO.getTypeRequest() != null) {
                TypeRequest typeRequest = ResourceUtil.getOrThrow(
                        typeRequestRepository.findById(ticketUpdateDTO.getTypeRequest().getId()),
                        "TypeRequest with ID " + ticketUpdateDTO.getTypeRequest().getId() + " not found");
                ticket.setTypeRequest(typeRequest);

                TicketHistoryDTO ticketHistoryDTO = ticketHistoryMapper.createDefaultTicketHistoryDTO(ticket,
                        TicketHistoryConstants.TICKET_TYPE_REQUEST_DESCRIPTION, NoteType.SYSTEM_GENERATED);
                ticketHistoryService.addTicketHistoryManually(ticketHistoryDTO);

            }

            // Pode mudar avontade (baixa/media/alta/critica)
            if (ticketUpdateDTO.getSla() != null) {
                SLA sla = ResourceUtil.getOrThrow(
                        slaRepository.findById(ticketUpdateDTO.getSla().getId()),
                        "SLA with ID " + ticketUpdateDTO.getSla().getId() + " not found");
                ticket.setSla(sla);

                TicketHistoryDTO ticketHistoryDTO = ticketHistoryMapper.createDefaultTicketHistoryDTO(ticket,
                        TicketHistoryConstants.TICKET_SLA_DESCRIPTION, NoteType.SYSTEM_GENERATED);
                ticketHistoryService.addTicketHistoryManually(ticketHistoryDTO);
            }

            // Tirar a area solving e trabalhar na category , alterando a categoria altera automaticamente a área de solução correspondente.
            if (ticketUpdateDTO.getCategoryTicket() != null) {

                CategoryTicket categoryTicket = ResourceUtil.getOrThrow(
                        categoryTicketRepository.findById(ticketUpdateDTO.getCategoryTicket().getId()),
                        "CategoryTicket with ID " + ticketUpdateDTO.getCategoryTicket().getId() + " not found");

                SolvingArea solvingArea  = ResourceUtil.getOrThrow(
                        solvingAreaRepository.findById(categoryTicket.getSolvingArea().getId()),
                        "SolvingArea with ID " + ticketUpdateDTO.getCategoryTicket().getSolvingAreaDTO().getId() + " not found");
                ticket.setCategoryTicket(categoryTicket);
                ticket.getCategoryTicket().setSolvingArea(solvingArea);

                TicketHistoryDTO ticketHistoryDTO = ticketHistoryMapper.createDefaultTicketHistoryDTO(ticket,
                        TicketHistoryConstants.TICKET_CATEGORY_DESCRIPTION, NoteType.SYSTEM_GENERATED);
                ticketHistoryService.addTicketHistoryManually(ticketHistoryDTO);

            }

            // Pode mudar avontade.
            if (ticketUpdateDTO.getTechnician() != null) {
                User technician = ResourceUtil.getOrThrow(
                        userRepository.findById(ticketUpdateDTO.getTechnician().getId()),
                        "User with ID " + ticketUpdateDTO.getTechnician().getId() + " not found");
                ticket.setTechnician(technician);

                TicketHistoryDTO ticketHistoryDTO = ticketHistoryMapper.createDefaultTicketHistoryDTO(ticket,
                        TicketHistoryConstants.TICKET_TECHNICIAN_DESCRIPTION, NoteType.SYSTEM_GENERATED);
                ticketHistoryService.addTicketHistoryManually(ticketHistoryDTO);
            }

            // Condições para cada tipo de status
            if(ticketUpdateDTO.getStatusTicket() != null) {
                ticket.setStatusTicket(ticketUpdateDTO.getStatusTicket());  // State Patterns ?!?!?!?!? cada status seta campos diferente e muda o comportamento

                if (EnumSet.of(StatusTicket.CANCELED).contains(ticket.getStatusTicket())) {
                    ticket.setResolver(userService.authenticated());
                    TicketHistoryDTO ticketHistoryDTO = ticketHistoryMapper.createDefaultTicketHistoryDTO(ticket,
                            TicketHistoryConstants.TICKET_CANCELED_DESCRIPTION, NoteType.SYSTEM_GENERATED);
                    ticketHistoryService.addTicketHistoryManually(ticketHistoryDTO);
                }

                if (EnumSet.of(StatusTicket.FINISHED).contains(ticket.getStatusTicket())) {
                    ticket.setResolver(userService.authenticated());
                    TicketHistoryDTO ticketHistoryDTO = ticketHistoryMapper.createDefaultTicketHistoryDTO(ticket,
                            TicketHistoryConstants.TICKET_CLOSED_DESCRIPTION, NoteType.SYSTEM_GENERATED);
                    ticketHistoryService.addTicketHistoryManually(ticketHistoryDTO);
                }

                if(ticket.getStatusTicket().equals(StatusTicket.FROZEN)) {
                    TicketHistoryDTO ticketHistoryDTO = ticketHistoryMapper.createDefaultTicketHistoryDTO(ticket,
                            TicketHistoryConstants.TICKET_FROZEN_DESCRIPTION, NoteType.SYSTEM_GENERATED);
                    ticketHistoryService.addTicketHistoryManually(ticketHistoryDTO);
                }

                if(ticket.getStatusTicket().equals(StatusTicket.IN_PROGRESS)) {
                    ticket.setTechnician(userService.authenticated());
                    TicketHistoryDTO ticketHistoryDTO = ticketHistoryMapper.createDefaultTicketHistoryDTO(ticket,
                            TicketHistoryConstants.TICKET_IN_PROGRESS_DESCRIPTION, NoteType.SYSTEM_GENERATED);
                    ticketHistoryService.addTicketHistoryManually(ticketHistoryDTO);
                }
            }

            ticket = ticketRepository.save(ticket);
            return ticketMapper.toTicketSimpleDTO(ticket);

        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id not found " + id);
        }
    }
}
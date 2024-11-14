package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.TicketDTO;
import com.dev.ServiceHelp.dto.TicketHistoryDTO;
import com.dev.ServiceHelp.dto.TicketSimpleDTO;
import com.dev.ServiceHelp.entities.*;
import com.dev.ServiceHelp.enums.StatusTicket;
import com.dev.ServiceHelp.mappers.*;
import com.dev.ServiceHelp.repository.*;
import com.dev.ServiceHelp.services.exceptions.ResourceNotFoundException;
import com.dev.ServiceHelp.utils.ResourceUtil;
import lombok.RequiredArgsConstructor;
import org.hibernate.Hibernate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RequiredArgsConstructor
@Service
public class TicketService {

    private final UserService userService;

    private final TicketMapper ticketMapper;

    private final TicketRepository ticketRepository;
    private final TypeRequestRepository typeRequestRepository;
    private final CategoryTicketRepository categoryTicketRepository;
    private final SolvingAreaRepository solvingAreaRepository;
    private final SLARepository slaRepository;
    private final TicketHistoryRepository ticketHistoryRepository;
    private final AttachmentRepository attachmentRepository;
    private final ResourceUtil resourceUtil;

    @Transactional
    public TicketSimpleDTO createTicket(TicketSimpleDTO ticketSimpleDTO) {

        Ticket ticket = ticketMapper.toTicketEntity(ticketSimpleDTO);

        TypeRequest typeRequest = ResourceUtil.getOrThrow(
                typeRequestRepository.findById(ticketSimpleDTO.getTypeRequest().id()),
                "TypeRequest with ID " + ticketSimpleDTO.getTypeRequest().id() + " not found");

        SLA sla = ResourceUtil.getOrThrow(
                slaRepository.findById(ticketSimpleDTO.getSla().getId()),
                "SLA with ID " + ticketSimpleDTO.getSla().getId() + " not found");

        CategoryTicket categoryTicket = ResourceUtil.getOrThrow(
                categoryTicketRepository.findById(ticketSimpleDTO.getCategoryTicket().getId()),
                "CategoryTicket with ID " + ticketSimpleDTO.getCategoryTicket().getId() + " not found");

        ticket.setTypeRequest(typeRequest);
        ticket.setSla(sla);
        ticket.setCategoryTicket(categoryTicket);
        ticket.setRequester(userService.authenticated());
        ticket.setRegistrationDate(Instant.now());
        ticket.setDueDate(resourceUtil.calculateDueDate(ticket.getRegistrationDate(), sla.getResponseTime()));
        ticket = ticketRepository.save(ticket);

        return ticketMapper.toTicketSimpleDTO(ticket);
    }

    @Transactional
    public TicketSimpleDTO assignTicketToTechnician(TicketSimpleDTO ticketSimpleDTO) {
        Ticket ticket = ResourceUtil.getOrThrow(
                ticketRepository.findById(ticketSimpleDTO.getId()),
                "Ticket with ID " + ticketSimpleDTO.getId() + " not found");
        ticket.setTechnician(userService.authenticated());
        ticket.setStatusTicket(StatusTicket.IN_PROGRESS);
        return ticketMapper.toTicketSimpleDTO(ticket);
    }

    @Transactional
    public TicketSimpleDTO resolveTicket(TicketSimpleDTO ticketSimpleDTO) {
        Ticket ticket = ResourceUtil.getOrThrow(
                ticketRepository.findById(ticketSimpleDTO.getId()),
                "Ticket with ID " + ticketSimpleDTO.getId() + " not found");

        ticket.setResolver(userService.authenticated());

        if (!ticketSimpleDTO.getStatusTicket().equals(StatusTicket.CANCELED) && !ticketSimpleDTO.getStatusTicket().equals(StatusTicket.FINISHED)) {
            throw new RuntimeException();
        }
        ticket.setStatusTicket(ticketSimpleDTO.getStatusTicket());
        ticket.setCompletionDate(Instant.now());
        return ticketMapper.toTicketSimpleDTO(ticket);
    }

    @Transactional
    public TicketSimpleDTO pauseTicket(TicketSimpleDTO ticketSimpleDTO) {
        Ticket ticket = ResourceUtil.getOrThrow(
                ticketRepository.findById(ticketSimpleDTO.getId()),
                "Ticket with ID " + ticketSimpleDTO.getId() + " not found");
        ticket.setStatusTicket(StatusTicket.FROZEN);
        return ticketMapper.toTicketSimpleDTO(ticket);
    }

    @Transactional(readOnly = true)
    public Page<TicketSimpleDTO> getTicketsByCriteria(Long id, String registrationDate, StatusTicket status, Long area, Long category, Long type, Pageable pageable) {

        SolvingArea solvingArea = area != null ? solvingAreaRepository.findById(area).orElse(null) : null;
        CategoryTicket categoryTicket = category != null ? categoryTicketRepository.findById(category).orElse(null) : null;
        TypeRequest typeRequest = type != null ? typeRequestRepository.findById(type).orElse(null) : null;

        Page<Ticket> ticketResults = ticketRepository.searchTicketsByParams(id, registrationDate, status, solvingArea, categoryTicket, typeRequest, pageable);

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
}
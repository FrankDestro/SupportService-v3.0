package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.TicketHistoryDTO;
import com.dev.ServiceHelp.entities.SLA;
import com.dev.ServiceHelp.entities.Ticket;
import com.dev.ServiceHelp.entities.TicketHistory;
import com.dev.ServiceHelp.mappers.TicketHistoryMapper;
import com.dev.ServiceHelp.repository.TicketHistoryRepository;
import com.dev.ServiceHelp.repository.TicketRepository;
import com.dev.ServiceHelp.services.exceptions.ResourceNotFoundException;
import com.dev.ServiceHelp.utils.ResourceUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@RequiredArgsConstructor
@Service
public class TicketHistoryService {

    private final UserService userService;

    private final TicketHistoryRepository ticketHistoryRepository;
    private final TicketRepository ticketRepository;

    private final TicketHistoryMapper ticketHistoryMapper;

    @Transactional
    public TicketHistoryDTO addTicketHistoryManually(TicketHistoryDTO ticketHistoryDTO) {

        Ticket ticket = ResourceUtil.getOrThrow(
                ticketRepository.findById(ticketHistoryDTO.getTicketId()),
                "Ticket with ID " + ticketHistoryDTO.getTicketId() + " not found");

        TicketHistory ticketHistory = ticketHistoryMapper.createDefaultTicketHistoryEntity(ticketHistoryDTO,
                ticket, userService.authenticated());
        ticketHistory = ticketHistoryRepository.save(ticketHistory);
        return ticketHistoryMapper.toTicketHistoryDTO(ticketHistory);
    }
}
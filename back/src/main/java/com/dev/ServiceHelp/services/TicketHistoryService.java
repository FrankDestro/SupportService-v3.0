package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.TicketHistoryDTO;
import com.dev.ServiceHelp.entities.Ticket;
import com.dev.ServiceHelp.entities.TicketHistory;
import com.dev.ServiceHelp.enums.NoteType;
import com.dev.ServiceHelp.mappers.TicketHistoryMapper;
import com.dev.ServiceHelp.repository.TicketHistoryRepository;
import com.dev.ServiceHelp.repository.TicketRepository;
import com.dev.ServiceHelp.services.exceptions.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@RequiredArgsConstructor
@Service
public class TicketHistoryService {

    private final UserService userService;

    private final TicketHistoryRepository ticketHistoryRepository;
    private final TicketRepository ticketRepository;

    private final TicketHistoryMapper ticketHistoryMapper;

    @Transactional
    public TicketHistoryDTO addTicketHistoryManually(TicketHistoryDTO ticketHistoryDTO) {

        Ticket ticket = ticketRepository.findById(ticketHistoryDTO.getTicketId())
                .orElseThrow(() -> new ResourceNotFoundException("Ticket not found"));

        TicketHistory ticketHistory = ticketHistoryMapper.toTicketHistoryEntity(ticketHistoryDTO);

        ticketHistory.setTicket(ticket);
        ticketHistory.setUser(userService.authenticated());
        ticketHistory.setSystemGenerated(false);
        ticketHistory.setNoteType(NoteType.COMMENT);
        ticketHistory.setRegistrationDate(Instant.now());

        ticketHistory = ticketHistoryRepository.save(ticketHistory);

        return ticketHistoryMapper.toTicketHistoryDTO(ticketHistory);
    }
}

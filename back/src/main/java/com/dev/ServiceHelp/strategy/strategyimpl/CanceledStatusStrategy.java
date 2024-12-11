package com.dev.ServiceHelp.strategy.strategyimpl;

import com.dev.ServiceHelp.constants.TicketHistoryConstants;
import com.dev.ServiceHelp.dto.TicketHistoryDTO;
import com.dev.ServiceHelp.dto.TicketUpdateDTO;
import com.dev.ServiceHelp.entities.Ticket;
import com.dev.ServiceHelp.enums.NoteType;
import com.dev.ServiceHelp.mappers.TicketHistoryMapper;
import com.dev.ServiceHelp.services.TicketHistoryService;
import com.dev.ServiceHelp.services.UserService;
import com.dev.ServiceHelp.strategy.StatusTicketStrategy;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class CanceledStatusStrategy implements StatusTicketStrategy {

    private final UserService userService;
    private final TicketHistoryMapper ticketHistoryMapper;
    private final TicketHistoryService ticketHistoryService;

    @Override
    public void applyStatus(Ticket ticket, TicketUpdateDTO ticketUpdateDTO) {
        ticket.setResolver(userService.authenticated());
        TicketHistoryDTO ticketHistoryDTO = ticketHistoryMapper.createDefaultTicketHistoryDTO(ticket,
                TicketHistoryConstants.TICKET_CANCELED_DESCRIPTION, NoteType.SYSTEM_GENERATED);
        ticketHistoryService.addTicketHistoryManually(ticketHistoryDTO);
    }
}


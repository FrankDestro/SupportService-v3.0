package com.dev.ServiceHelp.strategy;

import com.dev.ServiceHelp.dto.TicketUpdateDTO;
import com.dev.ServiceHelp.entities.Ticket;
import org.springframework.stereotype.Component;

@Component
public interface StatusTicketStrategy {

    void applyStatus(Ticket ticket, TicketUpdateDTO ticketUpdateDTO);

}
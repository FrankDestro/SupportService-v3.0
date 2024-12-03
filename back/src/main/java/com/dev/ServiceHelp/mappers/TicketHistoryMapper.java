package com.dev.ServiceHelp.mappers;

import com.dev.ServiceHelp.dto.TicketHistoryDTO;
import com.dev.ServiceHelp.entities.Ticket;
import com.dev.ServiceHelp.entities.TicketHistory;
import com.dev.ServiceHelp.entities.User;
import com.dev.ServiceHelp.enums.NoteType;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.time.Instant;

@Mapper(componentModel = "spring")
public interface TicketHistoryMapper {

    @Mapping(target = "ticketId", source = "ticket.id")
    TicketHistoryDTO toTicketHistoryDTO(TicketHistory ticketHistory);

    TicketHistory toTicketHistoryEntity(TicketHistoryDTO ticketHistoryDTO);

    default TicketHistoryDTO createDefaultTicketHistoryDTO(Ticket ticket, String description, NoteType noteType) {
        TicketHistoryDTO ticketHistoryDTO = new TicketHistoryDTO();
        ticketHistoryDTO.setDescription(description);
        ticketHistoryDTO.setTicketId(ticket.getId());
        ticketHistoryDTO.setAnnotationPublic(false);
        ticketHistoryDTO.setRegistrationDate(Instant.now());
        ticketHistoryDTO.setVisibleToRequester(true);
        ticketHistoryDTO.setSystemGenerated(true);
        ticketHistoryDTO.setNoteType(noteType);
        return ticketHistoryDTO;
    }

    default TicketHistory createDefaultTicketHistoryEntity(
            TicketHistoryDTO ticketHistoryDTO, Ticket ticket, User user) {
        TicketHistory ticketHistory = new TicketHistory();
        ticketHistory.setTicket(ticket);
        ticketHistory.setDescription(ticketHistoryDTO.getDescription());
        ticketHistory.setUser(user);
        ticketHistory.setSystemGenerated(false);
        ticketHistory.setNoteType(ticketHistoryDTO.getNoteType());
        ticketHistory.setRegistrationDate(Instant.now());
        return ticketHistory;
    }
}

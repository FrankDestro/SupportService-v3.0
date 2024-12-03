package com.dev.ServiceHelp.factory;

import com.dev.ServiceHelp.dto.TicketHistoryDTO;
import com.dev.ServiceHelp.entities.TicketHistory;
import com.dev.ServiceHelp.enums.NoteType;
import com.dev.ServiceHelp.mappers.TicketHistoryMapper;
import lombok.Setter;

import java.time.Instant;

public class TicketHistoryFactory {

    @Setter
    private static TicketHistoryMapper ticketHistoryMapper;

    public static TicketHistory createTicketHistoryEntity() {
        return new TicketHistory(1L,
                "description",
                false,
                true,
                Instant.now(),
                false,
                NoteType.COMMENT,
                TicketFactory.createTicketEntity(),
                UserFactory.createUserEntity());
    }

    public static TicketHistoryDTO createTicketHistoryDTO() {
        return new TicketHistoryDTO(
                1L,
                "description",
                true,
                Instant.now(),
                false,
                false,
                NoteType.COMMENT,
                1L,
                null);
    }
}

package com.dev.ServiceHelp.mappers;

import com.dev.ServiceHelp.dto.*;
import com.dev.ServiceHelp.entities.*;
import com.dev.ServiceHelp.enums.StatusTicket;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import java.time.Instant;

@Mapper(componentModel = "spring")
public interface TicketMapper {

    @Mapping(target = "resolver", source = "resolver")
    @Mapping(target = "categoryTicket", source = "categoryTicket")
    TicketSimpleDTO toTicketSimpleDTO(Ticket ticket);

    @Mapping(target = "ticketHistories", ignore = true)
    @Mapping(target = "attachments", ignore = true)
    Ticket toTicketEntity(TicketSimpleDTO ticketSimpleDTO);

    TicketDTO toTicketDTO(Ticket ticket);

    @Mapping(target = "ticketId", ignore = true)
    AttachmentDTO toAttachmentDTO(Attachment attachment);

    @AfterMapping
    default void setDefaultValuesForEntity(@MappingTarget Ticket ticket) {
        ticket.setStatusTicket(StatusTicket.OPEN);
        ticket.setRegistrationDate(Instant.now());
    }
}

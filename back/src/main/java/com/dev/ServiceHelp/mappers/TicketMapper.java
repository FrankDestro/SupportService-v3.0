package com.dev.ServiceHelp.mappers;

import com.dev.ServiceHelp.dto.*;
import com.dev.ServiceHelp.entities.*;
import com.dev.ServiceHelp.enums.StatusTicket;
import com.dev.ServiceHelp.utils.ResourceUtil;
import org.mapstruct.*;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;

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

    default Ticket toInitializedTicket(TicketSimpleDTO ticketSimpleDTO, TypeRequest typeRequest, SLA sla,
                                              CategoryTicket categoryTicket, SolvingArea solvingArea,
                                              User requester, ResourceUtil resourceUtil) {
        Ticket ticket = toTicketEntity(ticketSimpleDTO);
        ticket.setTypeRequest(typeRequest);
        ticket.setSla(sla);
        ticket.setCategoryTicket(categoryTicket);
        ticket.setSolvingArea(solvingArea);
        ticket.setRequester(requester);

        ZoneId zoneId = ZoneId.of("America/Sao_Paulo");
        ZonedDateTime zdt = ZonedDateTime.now(zoneId);
        ticket.setRegistrationDate(zdt.toInstant());
        ticket.setDueDate(resourceUtil.calculateDueDate(ticket.getRegistrationDate(), sla.getResponseTime()));

        return ticket;
    }
}

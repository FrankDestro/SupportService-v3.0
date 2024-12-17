package com.dev.ServiceHelp.factory;

import com.dev.ServiceHelp.dto.TicketDTO;
import com.dev.ServiceHelp.dto.TicketSimpleDTO;
import com.dev.ServiceHelp.entities.Ticket;
import com.dev.ServiceHelp.enums.StatusTicket;
import com.dev.ServiceHelp.mappers.AttachmentMapper;
import com.dev.ServiceHelp.mappers.TicketMapper;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

public class TicketFactory {

    @Setter
    public static AttachmentMapper attachmentMapper;

    @Setter
    public static TicketMapper ticketMapper;

    public static Ticket createTicketEntity() {
        Ticket ticket = new Ticket();
        ticket.setId(1L);
        ticket.setSubject("Problema no login");
        ticket.setDescription("Erro ao tentar fazer login no sistema");
        ticket.setRegistrationDate(Instant.now());
        ticket.setDueDate(Instant.now());
        ticket.setStatusTicket(StatusTicket.IN_PROGRESS);
        ticket.setCompletionDate(Instant.now());
        ticket.setTypeRequest(TypeRequestFactory.createTypeRequestEntity());
        ticket.setRequester(UserFactory.createUserEntity());
        ticket.setSla(SLAFactory.createSLAEntity());
        ticket.setSolvingArea(SolvingAreaFactory.createSolvingAreaEntity());
        ticket.setCategoryTicket(CategoryTicketFactory.createCategoryTicketEntity());
        ticket.setTechnician(null);
        ticket.setResolver(null);
        ticket.setParentTicketId(null);
        return ticket;
    }

    public static TicketDTO createTicketDTO() {
        Ticket ticket = new Ticket();
        ticket.setId(1L);
        ticket.setSubject("Problema no login");
        ticket.setDescription("Erro ao tentar fazer login no sistema");
        ticket.setRegistrationDate(Instant.now());
        ticket.setDueDate(Instant.now());
        ticket.setStatusTicket(StatusTicket.IN_PROGRESS);
        ticket.setCompletionDate(Instant.now());
        ticket.setTypeRequest(TypeRequestFactory.createTypeRequestEntity());
        ticket.setRequester(UserFactory.createUserEntity());
        ticket.setSla(SLAFactory.createSLAEntity());
        ticket.setSolvingArea(SolvingAreaFactory.createSolvingAreaEntity());
        ticket.setCategoryTicket(CategoryTicketFactory.createCategoryTicketEntity());
        ticket.setTechnician(null);
        ticket.setResolver(null);
        ticket.setParentTicketId(null);
        return ticketMapper.toTicketDTO(ticket);
    }

    public static TicketSimpleDTO createTicketSimpleDTO() {
        TicketSimpleDTO ticketSimpleDTO = new TicketSimpleDTO();
        ticketSimpleDTO.setId(1L);
        ticketSimpleDTO.setSubject("Problema no login");
        ticketSimpleDTO.setDescription("Erro ao tentar fazer login no sistema");
        ticketSimpleDTO.setRegistrationDate(Instant.now());
        ticketSimpleDTO.setDueDate(Instant.now());
        ticketSimpleDTO.setStatusTicket(StatusTicket.IN_PROGRESS);
        ticketSimpleDTO.setCompletionDate(Instant.now());
        ticketSimpleDTO.setTypeRequest(TypeRequestFactory.createTypeRequestDTO());
        ticketSimpleDTO.setRequester(UserFactory.createUserDTO());
        ticketSimpleDTO.setSla(SLAFactory.createSLADTO());
        ticketSimpleDTO.setSolvingArea(SolvingAreaFactory.createSolvingAreaDTO());
        ticketSimpleDTO.setCategoryTicket(CategoryTicketFactory.createCategoryTicketDTO());
        ticketSimpleDTO.setTechnician(null);
        ticketSimpleDTO.setResolver(null);
        return ticketSimpleDTO;
    }
}

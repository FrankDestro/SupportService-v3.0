package com.dev.ServiceHelp.factory;

import com.dev.ServiceHelp.entities.Ticket;
import com.dev.ServiceHelp.enums.StatusTicket;
import com.dev.ServiceHelp.mappers.AttachmentMapper;
import lombok.Setter;

import java.time.Instant;

public class TicketFactory {

    @Setter
    public static AttachmentMapper attachmentMapper;

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

}
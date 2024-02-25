package com.dev.ServiceHelp.dto;

import com.dev.ServiceHelp.entities.Ticket;
import com.dev.ServiceHelp.enums.StatusTicket;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class TicketDTO {

    private Long id;
    private String subject;
    private String description;
    private String priority;
    private String typeRequest;
    private String categoryProblem;
    private Instant registrationDate;
    private Instant dueDate;
    private StatusTicket statusTicket;
    private Long solicitanteId;
    private Long tecnicoId;
    private Instant completionDate;

    private Set<AnnotationDTO> annotations = new HashSet<AnnotationDTO>();

    private Set<AttachmentDTO> attachments = new HashSet<AttachmentDTO>();

    public TicketDTO(Ticket entity) {
        id = entity.getId();
        subject = entity.getSubject();
        description = entity.getDescription();
        priority = entity.getPriority();
        typeRequest = entity.getTypeRequest();
        categoryProblem = entity.getCategoryProblem();
        registrationDate = entity.getRegistrationDate();
        dueDate = entity.getDueDate();
        statusTicket = entity.getStatusTicket();
        tecnicoId = entity.getTecnico().getId();
        solicitanteId = entity.getSolicitante().getId();
        entity.getAnnotations().forEach(annotations -> this.annotations.add(new AnnotationDTO(annotations)));
        entity.getAttachment().forEach(attachments -> this.attachments.add(new AttachmentDTO(attachments)));
    }
}

package com.dev.ServiceHelp.dto;

import com.dev.ServiceHelp.entities.Annotation;
import com.dev.ServiceHelp.entities.Ticket;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class AnnotationDTO {

    private Long id;
    private String description;
    private boolean annotationPublic;
    private Instant registrationDate;
    private Long ticketId;
    private Long userId;

    public AnnotationDTO(Annotation entity) {
        id = entity.getId();
        description = entity.getDescription();
        annotationPublic = entity.GetAnnotationPublic();
        registrationDate = entity.getRegistrationDate();
        ticketId = entity.getTicket().getId();
        userId = entity.getUser().getId();
    }
}

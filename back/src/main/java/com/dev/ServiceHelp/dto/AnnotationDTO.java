package com.dev.ServiceHelp.dto;

import com.dev.ServiceHelp.entities.Annotation;
import com.dev.ServiceHelp.entities.Ticket;
import jakarta.persistence.*;

import java.time.Instant;

public class AnnotationDTO {

    private Long id;
    private String description;
    private boolean annotationPublic;
    private Instant registrationDate;
    private Long ticketId;
    private Long userId;

    public AnnotationDTO() {
    }

    public AnnotationDTO(Long id, String description, boolean annotationPublic, Instant registrationDate, Long ticketId, Long userId) {
        this.id = id;
        this.description = description;
        this.annotationPublic = annotationPublic;
        this.registrationDate = registrationDate;
        this.ticketId = ticketId;
        this.userId = userId;
    }

    public AnnotationDTO(Annotation entity) {
        id = entity.getId();
        description = entity.getDescription();
        annotationPublic = entity.GetAnnotationPublic();
        registrationDate = entity.getRegistrationDate();
        ticketId = entity.getTicket().getId();
        userId = entity.getUser().getId();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isAnnotationPublic() {
        return annotationPublic;
    }

    public void setAnnotationPublic(boolean annotationPublic) {
        this.annotationPublic = annotationPublic;
    }

    public Instant getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(Instant registrationDate) {
        this.registrationDate = registrationDate;
    }

    public Long getTicketId() {
        return ticketId;
    }

    public void setTicketId(Long ticketId) {
        this.ticketId = ticketId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}

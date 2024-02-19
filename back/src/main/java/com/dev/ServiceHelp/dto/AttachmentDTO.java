package com.dev.ServiceHelp.dto;

import com.dev.ServiceHelp.entities.Attachment;
import com.dev.ServiceHelp.entities.Ticket;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.time.Instant;

public class AttachmentDTO {

    private Long id;
    private String url;
    private Instant registrationDate;
    private Long ticket;
    private Long userId;


    public AttachmentDTO() {
    }

    public AttachmentDTO(Long id, String url, Instant registrationDate, Long ticket, Long userId) {
        this.id = id;
        this.url = url;
        this.registrationDate = registrationDate;
        this.ticket = ticket;
        this.userId = userId;

    }

    public AttachmentDTO(Attachment entity) {
        id = entity.getId();
        url = entity.getUrl();
        registrationDate = entity.getRegistrationDate();
        ticket = entity.getTicket().getId();
        userId = entity.getUser().getId();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Instant getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(Instant registrationDate) {
        this.registrationDate = Instant.now();
    }

    public Long getTicket() {
        return ticket;
    }

    public void setTicket(Long ticket) {
        this.ticket = ticket;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}

package com.dev.ServiceHelp.dto;

import com.dev.ServiceHelp.entities.Ticket;
import com.dev.ServiceHelp.enums.StatusTicket;

import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

public class TicketDTO {

    private Long id;
    private String description;
    private String priority;
    private String typeRequest;
    private Instant registrationDate;
    private StatusTicket statusTicket;
    private Long solicitanteId;
    private Long tecnicoId;
    private Instant completionDate;

    private Set<AnnotationDTO> annotations = new HashSet<AnnotationDTO>();

    private Set<AttachmentDTO> attachments = new HashSet<AttachmentDTO>();

    public TicketDTO() {
    }

    public TicketDTO(Long id, String description, String priority, String typeRequest, Instant registrationDate, StatusTicket statusTicket, Long solicitanteId, Long tecnicoId, Instant completionDate, Long userId) {
        this.id = id;
        this.description = description;
        this.priority = priority;
        this.typeRequest = typeRequest;
        this.registrationDate = registrationDate;
        this.statusTicket = statusTicket;
        this.solicitanteId = solicitanteId;
        this.tecnicoId = tecnicoId;
        this.completionDate = completionDate;
    }

    public TicketDTO(Ticket entity) {
        id = entity.getId();
        description = entity.getDescription();
        priority = entity.getPriority();
        typeRequest = entity.getTypeRequest();
        registrationDate = entity.getRegistrationDate();
        statusTicket = entity.getStatusTicket();
        tecnicoId = entity.getTecnico().getId();
        solicitanteId = entity.getSolicitante().getId();
        entity.getAnnotations().forEach(annotations -> this.annotations.add(new AnnotationDTO(annotations)));
        entity.getAttachment().forEach(attachments -> this.attachments.add(new AttachmentDTO(attachments)));
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

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getTypeRequest() {
        return typeRequest;
    }

    public void setTypeRequest(String typeRequest) {
        this.typeRequest = typeRequest;
    }

    public Instant getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(Instant registrationDate) {
        this.registrationDate = registrationDate;
    }

    public StatusTicket getStatusTicket() {
        return statusTicket;
    }

    public void setStatusTicket(StatusTicket statusTicket) {
        this.statusTicket = statusTicket;
    }

    public Instant getCompletionDate() {
        return completionDate;
    }

    public void setCompletionDate(Instant completionDate) {
        this.completionDate = completionDate;
    }

    public Long getSolicitanteId() {
        return solicitanteId;
    }

    public void setSolicitanteId(Long solicitanteId) {
        this.solicitanteId = solicitanteId;
    }

    public Long getTecnicoId() {
        return tecnicoId;
    }

    public void setTecnicoId(Long tecnicoId) {
        this.tecnicoId = tecnicoId;
    }

    public Set<AnnotationDTO> getAnnotations() {
        return annotations;
    }

    public void setAnnotations(Set<AnnotationDTO> annotations) {
        this.annotations = annotations;
    }

    public Set<AttachmentDTO> getAttachments() {
        return attachments;
    }

    public void setAttachments(Set<AttachmentDTO> attachments) {
        this.attachments = attachments;
    }
}

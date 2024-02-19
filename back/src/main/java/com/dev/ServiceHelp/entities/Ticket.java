package com.dev.ServiceHelp.entities;

import com.dev.ServiceHelp.enums.StatusTicket;
import jakarta.persistence.*;

import java.time.Instant;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "ticket")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "TEXT")
    private String description;
    private String priority;
    private String typeRequest;
    private Instant registrationDate;
    private StatusTicket statusTicket;
    private Instant completionDate;

    @ManyToOne
    @JoinColumn(name = "solicitante_id")
    private User solicitante;

    @ManyToOne
    @JoinColumn(name = "tecnico_id")
    private User tecnico;

    @OneToMany(mappedBy = "ticket")
    private Set<Annotation> annotations = new HashSet<>();

    @OneToMany(mappedBy = "ticket")
    private Set<Attachment> attachment = new HashSet<>();

    public Ticket() {
    }

    public Ticket(Long id, String description, String priority, String typeRequest, Instant registrationDate,
                  StatusTicket statusTicket, Instant completionDate, User solicitante, User tecnico) {
        this.id = id;
        this.description = description;
        this.priority = priority;
        this.typeRequest = typeRequest;
        this.registrationDate = registrationDate;
        this.statusTicket = statusTicket;
        this.completionDate = completionDate;
        this.tecnico = tecnico;
        this.solicitante = solicitante;
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

    public User getSolicitante() {
        return solicitante;
    }

    public void setSolicitante(User solicitante) {
        this.solicitante = solicitante;
    }

    public User getTecnico() {
        return tecnico;
    }

    public void setTecnico(User tecnico) {
        this.tecnico = tecnico;
    }

    public Set<Annotation> getAnnotations() {
        return annotations;
    }

    public void setAnnotations(Set<Annotation> annotations) {
        this.annotations = annotations;
    }

    public Set<Attachment> getAttachment() {
        return attachment;
    }

    public void setAttachment(Set<Attachment> attachment) {
        this.attachment = attachment;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Ticket ticket = (Ticket) o;
        return Objects.equals(id, ticket.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

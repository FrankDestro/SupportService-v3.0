package com.dev.ServiceHelp.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "annotation")
public class Annotation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "TEXT")
    private String description;
    private boolean annotationPublic;
    private Instant registrationDate;

    @ManyToOne
    @JoinColumn(name = "ticket_id")
    private Ticket ticket;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Long getId() {
        return id;
    }

    public Annotation() {
    }

    public Annotation(Long id, String description, boolean annotationPublic, Instant registrationDate, Ticket ticket, User user) {
        this.id = id;
        this.description = description;
        this.annotationPublic = annotationPublic;
        this.registrationDate = registrationDate;
        this.ticket = ticket;
        this.user = user;
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

    public boolean GetAnnotationPublic() {
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

    public Ticket getTicket() {
        return ticket;
    }

    public void setTicket(Ticket ticket) {
        this.ticket = ticket;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
package com.dev.ServiceHelp.entities;

import com.dev.ServiceHelp.enums.NoteType;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import java.time.Instant;
import java.util.Objects;

@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "ticketHistory")
public class TicketHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "TEXT")
    private String description;
    private boolean annotationPublic;
    private boolean visibleToRequester;
    private Instant registrationDate;
    private boolean systemGenerated;

    @Enumerated(EnumType.STRING)
    @Column(name = "note_type")
    private NoteType noteType;

    @ManyToOne
    @JoinColumn(name = "ticket_id", nullable = false)
    private Ticket ticket;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TicketHistory)) return false;
        TicketHistory history = (TicketHistory) o;
        return Objects.equals(id, history.id);
    }
}
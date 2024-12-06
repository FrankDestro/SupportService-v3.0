package com.dev.ServiceHelp.entities;

import com.dev.ServiceHelp.enums.StatusTicket;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import java.time.Instant;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode

@Entity
@Table(name = "ticket")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "TEXT")
    private String subject;
    @Column(columnDefinition = "TEXT")
    private String description;
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant registrationDate;
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant dueDate;
    private StatusTicket statusTicket;
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant completionDate;

    @Column(name = "parent_ticket_id", nullable = true)
    private Long parentTicketId;

    @ManyToOne
    private TypeRequest typeRequest;
    @ManyToOne
    private User requester;
    @ManyToOne
    private SLA sla;
    @ManyToOne
    private SolvingArea solvingArea;

    @ManyToOne
    private CategoryTicket categoryTicket;

    @ManyToOne
    @JoinColumn(name = "technician_id" , nullable = true)
    private User technician;

    @ManyToOne
    @JoinColumn(name = "resolver_id", nullable = true)
    private User resolver;

    @OneToMany(mappedBy = "ticket")
    private Set<TicketHistory> ticketHistories = new HashSet<>();

    @OneToMany(mappedBy = "ticket")
    private Set<Attachment> attachments = new HashSet<>();

    //NOVO
    @ManyToOne
    @JoinColumn(name = "knowError_id", nullable = true)
    private KnowError knowError;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Ticket)) return false;
        Ticket ticket = (Ticket) o;
        return Objects.equals(id, ticket.id) && Objects.equals(subject, ticket.subject);
    }

}

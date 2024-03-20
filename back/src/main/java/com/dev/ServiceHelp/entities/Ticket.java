package com.dev.ServiceHelp.entities;

import com.dev.ServiceHelp.enums.StatusTicket;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;

import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor

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
    private String priority;
    private String typeRequest;
    private String categoryProblem;
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant registrationDate;
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant dueDate;
    private StatusTicket statusTicket;
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant completionDate;

    @ManyToOne
    @JoinColumn(name = "requester_id")
    private User requester;

    @ManyToOne
    @JoinColumn(name = "technician_id" , nullable = true)
    private User technician;

    @OneToMany(mappedBy = "ticket")
    private Set<Annotation> annotations = new HashSet<>();

    @OneToMany(mappedBy = "ticket")
    private Set<Attachment> attachment = new HashSet<>();
}

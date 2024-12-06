package com.dev.ServiceHelp.entities;

import com.dev.ServiceHelp.enums.StatusKnowError;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "knowError")
public class KnowError {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String rootCause;
    private String solution;
    private List<String> tags;
    @Enumerated(EnumType.STRING)
    private StatusKnowError status;
    private LocalDate createDate;
    private LocalDate resolutionDate;

    @ManyToOne
    @JoinColumn(name = "id_registrationUser")
    private User RegistratorUser;

    @OneToMany(mappedBy = "knowError", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Attachment> attachments = new ArrayList<>();

    @OneToMany(mappedBy = "knowError", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Ticket> tickets = new ArrayList<>();

}

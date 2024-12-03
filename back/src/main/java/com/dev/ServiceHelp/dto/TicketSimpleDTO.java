package com.dev.ServiceHelp.dto;

import com.dev.ServiceHelp.enums.StatusTicket;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TicketSimpleDTO {

    private Long id;
    private String subject;
    private String description;
    private Instant registrationDate;
    private Instant dueDate;
    private StatusTicket statusTicket;
    private Instant completionDate;
    private TypeRequestDTO typeRequest;
    private SLADTO sla;
    private SolvingAreaDTO solvingArea;
    private CategoryTicketDTO categoryTicket;
    private UserDTO requester;
    private UserDTO technician;
    private UserDTO resolver;
}
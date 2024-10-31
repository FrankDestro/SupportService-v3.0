package com.dev.ServiceHelp.dto;

import com.dev.ServiceHelp.enums.StatusTicket;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TicketDTO {
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
    private UserSimpleDTO requester;
    private UserSimpleDTO technician;
    private UserSimpleDTO resolver;
    private Set<TicketHistoryDTO> ticketHistories;
    private Set<AttachmentDTO> attachments;
}



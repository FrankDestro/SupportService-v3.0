package com.dev.ServiceHelp.dto;

import com.dev.ServiceHelp.entities.Ticket;
import com.dev.ServiceHelp.entities.User;
import com.dev.ServiceHelp.enums.StatusTicket;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class TicketSimpleDTO {

    private Long id;
    private String subject;
    private String description;
    private String priority;
    private String typeRequest;
    private String categoryProblem;
    private Instant registrationDate;
    private Instant dueDate;
    private StatusTicket statusTicket;
    private Instant completionDate;
    private UserDTO request;
    private UserDTO technician;

    public TicketSimpleDTO(User user, Long id, String subject, String description, String priority, String typeRequest, String categoryProblem,
                           Instant registrationDate, Instant dueDate, StatusTicket statusTicket,
                           Instant completionDate) {
        this.id = id;
        this.subject = subject;
        this.description = description;
        this.priority = priority;
        this.typeRequest = typeRequest;
        this.categoryProblem = categoryProblem;
        this.registrationDate = registrationDate;
        this.dueDate = dueDate;
        this.statusTicket = statusTicket;
        this.completionDate = completionDate;
        this.request = new UserDTO(user);
        this.request = new UserDTO(user);
    }

    public TicketSimpleDTO(Ticket entity) {
        id = entity.getId();
        subject = entity.getSubject();
        description = entity.getDescription();
        priority = entity.getPriority();
        typeRequest = entity.getTypeRequest();
        categoryProblem = entity.getCategoryProblem();
        registrationDate = entity.getRegistrationDate();
        dueDate = entity.getDueDate();
        statusTicket = entity.getStatusTicket();
        request = new UserDTO(entity.getRequester());

        if (entity.getTechnician() != null) {
            technician = new UserDTO(entity.getTechnician());
        } else {
            technician = new UserDTO();
        }
    }
}
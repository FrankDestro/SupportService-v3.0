package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.*;
import com.dev.ServiceHelp.entities.Department;
import com.dev.ServiceHelp.entities.Role;
import com.dev.ServiceHelp.entities.Ticket;
import com.dev.ServiceHelp.entities.User;
import com.dev.ServiceHelp.enums.StatusTicket;
import com.dev.ServiceHelp.repository.TicketRepository;
import com.dev.ServiceHelp.repository.UserRepository;
import com.dev.ServiceHelp.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Optional;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Transactional(readOnly = true)
    public TicketDTO findTicketById(Long id) {
        Ticket ticket = ticketRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("ticket not found"));
        return new TicketDTO(ticket);
    }

    @Transactional
    public TicketDTO createNewTicket(TicketDTO dto) {
        Ticket entity = new Ticket();
        initializeEntityFromDTO(dto, entity);
        entity = ticketRepository.save(entity);
        return new TicketDTO(entity);
    }

    private void initializeEntityFromDTO(TicketDTO dto, Ticket entity) {
        entity.setSubject(dto.getSubject());
        entity.setDescription(dto.getDescription());
        entity.setPriority(dto.getPriority());
        entity.setTypeRequest(dto.getTypeRequest());
        entity.setCategoryProblem(dto.getCategoryProblem());
        entity.setRegistrationDate(Instant.now());

        User solicitante = userService.authenticated();
        entity.setSolicitante(solicitante);

        User tecnico = userRepository.findById(dto.getTecnicoId()).orElse(null);
        entity.setTecnico(tecnico);

        Instant registrationDate = entity.getRegistrationDate();
        Instant dueDate;

        switch (dto.getPriority().toLowerCase()) {
            case "baixa":
                dueDate = registrationDate.plus(8, ChronoUnit.HOURS);
                break;
            case "media":
                dueDate = registrationDate.plus(4, ChronoUnit.HOURS);
                break;
            case "alta":
                dueDate = registrationDate.plus(1, ChronoUnit.HOURS);
                break;
            default:
                dueDate = registrationDate;
        }

        entity.setDueDate(dueDate);
        entity.setStatusTicket(StatusTicket.OPEN);
        entity.setCompletionDate(null);
    }
}
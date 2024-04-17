package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.*;
import com.dev.ServiceHelp.entities.Annotation;
import com.dev.ServiceHelp.entities.Attachment;
import com.dev.ServiceHelp.entities.Ticket;
import com.dev.ServiceHelp.entities.User;
import com.dev.ServiceHelp.enums.StatusTicket;
import com.dev.ServiceHelp.enums.StatusUser;
import com.dev.ServiceHelp.repository.AnnotationRepository;
import com.dev.ServiceHelp.repository.TicketRepository;
import com.dev.ServiceHelp.repository.UserRepository;
import com.dev.ServiceHelp.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Set;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AnnotationRepository annotationRepository;


    @Transactional(readOnly = true)
    public Page<TicketSimpleDTO> searchTicketsByParams(Long id, String registrationDate, StatusTicket status, Pageable pageable) {
        Page<Ticket> list = ticketRepository.searchTicketsByParams(id, registrationDate, status, pageable);
        return list.map(x -> new TicketSimpleDTO(x));
    }

//    @Transactional(readOnly = true)
//    public Page<TicketDTO> findAllPaged(Pageable pageable) {
//        Page<Ticket> list = ticketRepository.findAll(pageable);
//        return list.map(x -> new TicketDTO(x));
//    }

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
        User requester = userService.authenticated();
        entity.setRequester(requester);

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

    @Transactional
    public TicketDTO UpdateTicket(Long id, TicketDTO dto) {
        try {
            Ticket entity = ticketRepository.getReferenceById(id);
            EntityFromDTO(dto, entity);
            entity = ticketRepository.save(entity);
            return new TicketDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id not found " + id);
        }
    }

    private void EntityFromDTO(TicketDTO dto, Ticket entity) {

        entity.setStatusTicket(dto.getStatusTicket());

        if (entity.getStatusTicket().equals(StatusTicket.FINISHED)) {
            entity.setCompletionDate(Instant.now());
        } else {
            entity.setCompletionDate(null);
        }

        User technician = userService.authenticated();
        entity.setTechnician(technician);

        Set<AnnotationDTO> annotationDTOs = dto.getAnnotations();
        Set<AttachmentDTO> attachmentDTOs = dto.getAttachments();

        entity.getAnnotations().clear();
        for (AnnotationDTO annotationDTO : annotationDTOs) {
            Annotation annotation = new Annotation();
            Ticket tk = ticketRepository.getReferenceById(annotationDTO.getTicketId());
            User us = userRepository.getReferenceById(annotationDTO.getUserId());
            annotation.setDescription(dto.getDescription());
            annotation.setRegistrationDate(Instant.now());
            annotation.setUser(us);
            annotation.setTicket(tk);
            annotationRepository.save(annotation);
            entity.getAnnotations().add(annotation);
        }

        entity.getAttachment().clear();
        if (attachmentDTOs != null) {
            for (AttachmentDTO attachmentDTO : attachmentDTOs) {
                Attachment attachment = new Attachment();
                attachment.setTicket(entity);
                entity.getAttachment().add(attachment);
            }
        }

    }
}
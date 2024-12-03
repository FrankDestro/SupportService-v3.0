package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.AttachmentDTO;
import com.dev.ServiceHelp.entities.Attachment;
import com.dev.ServiceHelp.entities.Ticket;
import com.dev.ServiceHelp.services.exceptions.ResourceNotFoundException;
import com.dev.ServiceHelp.factory.AttachmentFactory;
import com.dev.ServiceHelp.factory.TicketFactory;
import com.dev.ServiceHelp.mappers.AttachmentMapper;
import com.dev.ServiceHelp.repository.AttachmentRepository;
import com.dev.ServiceHelp.repository.TicketRepository;
import jakarta.persistence.EntityNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class AttachmentServiceTest {

    @InjectMocks
    private AttachmentService attachmentService;

    @Mock
    private UserService userService;

    @Mock
    private AttachmentRepository attachmentRepository;

    @Mock
    private AttachmentMapper attachmentMapper;

    @Mock
    private TicketRepository ticketRepository;

    private Ticket ticket;
    private Attachment attachment;
    private AttachmentDTO attachmentDTO;
    private Long ticketIdDoesNotExisting;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        AttachmentFactory.setAttachmentMapper(attachmentMapper);

        ticket = TicketFactory.createTicketEntity();
        attachment = AttachmentFactory.createAttachmentEntity();
        attachmentDTO = AttachmentFactory.createAttachmentDTO();
        ticketIdDoesNotExisting = 10000L;

    }

    @Test
    void saveAttachmentShouldReturnAttachmentDTO() {
        when(ticketRepository.findById(ArgumentMatchers.any())).thenReturn(Optional.of(ticket));
        Attachment attachment = AttachmentFactory.createAttachmentEntity();
        when(attachmentMapper.toAttachmentEntity(attachmentDTO)).thenReturn(attachment);
        when(attachmentMapper.toAttachmentDTO(attachment)).thenReturn(attachmentDTO);
        when(attachmentRepository.save(attachment)).thenReturn(attachment);
        attachment.setUser(userService.authenticated());

        AttachmentDTO result = attachmentService.saveAttachment(attachmentDTO);

        assertNotNull(result);
        assertEquals(attachmentDTO, result);
    }

    @Test
    void saveAttachmentShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {

        when(ticketRepository.findById(ArgumentMatchers.any())).thenReturn(Optional.empty());
        doThrow(EntityNotFoundException.class).when(ticketRepository).findById(ticketIdDoesNotExisting);

        assertThrows(ResourceNotFoundException.class, () -> {
            attachmentService.saveAttachment(attachmentDTO);
        });
    }



}
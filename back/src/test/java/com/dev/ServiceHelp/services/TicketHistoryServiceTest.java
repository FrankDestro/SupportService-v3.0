package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.TicketHistoryDTO;
import com.dev.ServiceHelp.entities.Ticket;
import com.dev.ServiceHelp.entities.TicketHistory;
import com.dev.ServiceHelp.entities.User;
import com.dev.ServiceHelp.services.exceptions.ResourceNotFoundException;
import com.dev.ServiceHelp.factory.TicketFactory;
import com.dev.ServiceHelp.factory.TicketHistoryFactory;
import com.dev.ServiceHelp.factory.UserFactory;
import com.dev.ServiceHelp.mappers.TicketHistoryMapper;
import com.dev.ServiceHelp.repository.TicketHistoryRepository;
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
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.when;

class TicketHistoryServiceTest {

    @InjectMocks
    private TicketHistoryService ticketHistoryService;

    @Mock
    private TicketRepository ticketRepository;

    @Mock
    private TicketHistoryRepository ticketHistoryRepository;

    @Mock
    private TicketHistoryMapper ticketHistoryMapper;

    @Mock
    private UserService userService;

    private Ticket ticket;
    private TicketHistory ticketHistory;
    private TicketHistoryDTO ticketHistoryDTO;
    private User user;
    private Long ticketIdDoesNotExisting;


    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        TicketHistoryFactory.setTicketHistoryMapper(ticketHistoryMapper);

        ticket = TicketFactory.createTicketEntity();
        ticketHistory = TicketHistoryFactory.createTicketHistoryEntity();
        ticketHistoryDTO = TicketHistoryFactory.createTicketHistoryDTO();
        user = UserFactory.createUserEntity();
        ticketIdDoesNotExisting= 10000L;

    }

    @Test
    void addTicketHistoryManuallyShouldReturnTicketHistoryDTO() {
        when(ticketRepository.findById(any())).thenReturn(Optional.of(ticket));
        when(ticketHistoryMapper.createDefaultTicketHistoryEntity(any(), any(), any())).thenReturn(ticketHistory);
        when(ticketHistoryRepository.save(any())).thenReturn(ticketHistory);
        when(ticketHistoryMapper.toTicketHistoryDTO(any())).thenReturn(ticketHistoryDTO);

        TicketHistoryDTO result = ticketHistoryService.addTicketHistoryManually(ticketHistoryDTO);

        assertNotNull(result, "Result should not be null");
        assertEquals(ticketHistoryDTO, result, "TicketHistoryDTO should match the result");
    }

    @Test
    void addTicketHistoryManuallyShouldThrowResourceNotFoundExceptionWhenIdDoesNotExisting() {

        when(ticketRepository.findById(ArgumentMatchers.any())).thenReturn(Optional.empty());
        doThrow(EntityNotFoundException.class).when(ticketRepository).findById(ticketIdDoesNotExisting);

        assertThrows(ResourceNotFoundException.class, () -> {
            ticketHistoryService.addTicketHistoryManually(ticketHistoryDTO);
        });
    }
}
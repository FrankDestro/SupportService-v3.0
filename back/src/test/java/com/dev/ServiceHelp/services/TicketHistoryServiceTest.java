package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.KnowErrorDTO;
import com.dev.ServiceHelp.dto.TicketHistoryDTO;
import com.dev.ServiceHelp.dto.UserSimpleDTO;
import com.dev.ServiceHelp.entities.KnowError;
import com.dev.ServiceHelp.entities.Ticket;
import com.dev.ServiceHelp.entities.TicketHistory;
import com.dev.ServiceHelp.entities.User;
import com.dev.ServiceHelp.factory.TicketFactory;
import com.dev.ServiceHelp.factory.TicketHistoryFactory;
import com.dev.ServiceHelp.factory.UserFactory;
import com.dev.ServiceHelp.mappers.TicketHistoryMapper;
import com.dev.ServiceHelp.repository.TicketHistoryRepository;
import com.dev.ServiceHelp.repository.TicketRepository;
import com.dev.ServiceHelp.services.exceptions.ResourceNotFoundException;
import com.dev.ServiceHelp.utils.ResourceUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(SpringExtension.class)
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
    private Long ticketIdExisting;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        TicketHistoryFactory.setTicketHistoryMapper(ticketHistoryMapper);
        ticketHistory = TicketHistoryFactory.createTicketHistoryEntity();
        ticketHistoryDTO = TicketHistoryFactory.createTicketHistoryDTO();
        ticket = TicketFactory.createTicketEntity();
        user = UserFactory.createUserEntity();
        ticketIdDoesNotExisting = 10000L;
        ticketIdExisting = 1L;

    }

    @Test
    void addTicketHistoryManuallyShouldThrowExceptionWhenIdExists() {
        // Arrange
        Long ticketId = 1L;
        Ticket ticket = new Ticket();
        ticket.setId(ticketId);
        TicketHistoryDTO ticketHistoryDTO = new TicketHistoryDTO();
        ticketHistoryDTO.setTicketId(ticketId);

        when(ticketRepository.findById(ticketId)).thenReturn(Optional.of(ticket));

        // Act e Assert
        assertThrows(Exception.class, () -> ticketHistoryService.addTicketHistoryManually(ticketHistoryDTO));
    }


    @Test
    void addTicketHistoryManuallyShouldReturnTicketHistoryDTOWhenIdExists() {
        try (MockedStatic<ResourceUtil> mockedResourceUtil = mockStatic(ResourceUtil.class)) {
            // Arrange
            Long ticketIdExisting = 1L;
            Ticket ticket = new Ticket(); // Mock do Ticket
            ticket.setId(ticketIdExisting);
            UserSimpleDTO userSimpleDTO = new UserSimpleDTO();
            userSimpleDTO.setId(1l);

            TicketHistoryDTO ticketHistoryDTO1 = new TicketHistoryDTO();
            ticketHistoryDTO1.setId(1L);
            ticketHistoryDTO1.setTicketId(ticketIdExisting);
            ticketHistoryDTO1.setUser(userSimpleDTO);

            TicketHistory ticketHistory = new TicketHistory(); // Mock do TicketHistory
            ticketHistory.setId(1L);

            System.out.println(ticketHistory.getId());

            when(ticketRepository.findById(ticketIdExisting)).thenReturn(Optional.of(ticket));
            when(userService.authenticated()).thenReturn(new User());

            mockedResourceUtil
                    .when(() -> ResourceUtil.getOrThrow(eq(Optional.of(ticket)), anyString()))
                    .thenReturn(ticket);

            when(ticketHistoryMapper.createDefaultTicketHistoryEntity(ticketHistoryDTO1, ticket, userService.authenticated()))
                    .thenReturn(ticketHistory);

            when(ticketHistoryRepository.save(any(TicketHistory.class))).thenReturn(ticketHistory);
            when(ticketHistoryMapper.toTicketHistoryDTO(ticketHistory)).thenReturn(ticketHistoryDTO1);

            TicketHistoryDTO result = ticketHistoryService.addTicketHistoryManually(ticketHistoryDTO1);

            assertNotNull(result);
            assertEquals(ticketHistoryDTO1, result);
        }
    }

}
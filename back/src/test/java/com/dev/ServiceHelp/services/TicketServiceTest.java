package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.CategoryTicketDTO;
import com.dev.ServiceHelp.dto.TicketHistoryDTO;
import com.dev.ServiceHelp.dto.TicketSimpleDTO;
import com.dev.ServiceHelp.entities.*;
import com.dev.ServiceHelp.factory.*;
import com.dev.ServiceHelp.mappers.TicketHistoryMapper;
import com.dev.ServiceHelp.mappers.TicketMapper;
import com.dev.ServiceHelp.repository.*;
import com.dev.ServiceHelp.utils.ResourceUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.springframework.expression.ParseException;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

@ExtendWith(SpringExtension.class)
class TicketServiceTest {

    @InjectMocks
    private TicketService ticketService;

    @Mock
    private TicketHistoryService ticketHistoryService;

    @Mock
    private TicketRepository ticketRepository;

    @Mock
    private TypeRequestRepository typeRequestRepository;

    @Mock
    private SLARepository slaRepository;

    @Mock
    private CategoryTicketRepository categoryTicketRepository;

    @Mock
    private SolvingAreaRepository solvingAreaRepository;

    @Mock
    private TicketMapper ticketMapper;

    @Mock
    private TicketHistoryMapper ticketHistoryMapper;

    @Mock
    private ResourceUtil resourceUtil;

    private Long idExisting;
    private TypeRequest typeRequest;
    private SLA sla;
    private CategoryTicket categoryTicket;
    private SolvingArea solvingArea;
    private Ticket ticket;
    private TicketHistoryDTO ticketHistoryDTO;
    private TicketSimpleDTO ticketSimpleDTO;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        TicketFactory.setTicketMapper(ticketMapper);
        idExisting = 1L;
        typeRequest = TypeRequestFactory.createTypeRequestEntity();
        sla = SLAFactory.createSLAEntity();
        categoryTicket = CategoryTicketFactory.createCategoryTicketEntity();
        solvingArea = SolvingAreaFactory.createSolvingAreaEntity();
        ticket = TicketFactory.createTicketEntity();
        ticketHistoryDTO = TicketHistoryFactory.createTicketHistoryDTO();
        ticketSimpleDTO = TicketFactory.createTicketSimpleDTO();

    }

    @Test
    public void testCreateTicket() {
        sla.setId(idExisting);
        typeRequest.setId(idExisting);

        // Configurar os objetos corretamente
        SolvingArea solvingArea = new SolvingArea();
        solvingArea.setId(1L);
        solvingArea.setName("Area de Solucao");

        CategoryTicket categoryTicket = CategoryTicketFactory.createCategoryTicketEntity();
        categoryTicket.setId(1L);
        categoryTicket.setSolvingArea(solvingArea); // Relacionamento unidirecional

        try (MockedStatic<ResourceUtil> mockedResourceUtil = mockStatic(ResourceUtil.class)) {
            Long idExisting = 1L;

            // Simula um retorno válido da classe utilitária
            mockedResourceUtil
                    .when(() -> ResourceUtil.getOrThrow(eq(Optional.of(idExisting)), anyString()))
                    .thenReturn(idExisting);

            System.out.println(solvingArea);


            // Configurar os repositórios
            when(slaRepository.findById(idExisting)).thenReturn(Optional.of(sla));
            when(typeRequestRepository.findById(idExisting)).thenReturn(Optional.of(typeRequest));
            when(categoryTicketRepository.findById(idExisting)).thenReturn(Optional.of(categoryTicket));
            when(solvingAreaRepository.findById(idExisting)).thenReturn(Optional.of(solvingArea));

            // Configurar o mapper e a persistência
            when(ticketMapper.toInitializedTicket(
                    any(), eq(typeRequest), eq(sla), eq(categoryTicket), eq(solvingArea), any(), any()))
                    .thenReturn(ticket);
            when(ticketRepository.save(ticket)).thenReturn(ticket);

            // Simular o histórico
            TicketHistoryDTO ticketHistoryDTO = new TicketHistoryDTO();
            when(ticketHistoryMapper.createDefaultTicketHistoryDTO(any(), any(), any()))
                    .thenReturn(ticketHistoryDTO);

            // Executar o método
            TicketSimpleDTO result = ticketService.createTicket(ticketSimpleDTO);

            // Verificar o comportamento
            verify(slaRepository).findById(idExisting);
            verify(typeRequestRepository).findById(idExisting);
            verify(categoryTicketRepository).findById(idExisting);
            verify(solvingAreaRepository).findById(idExisting);
            verify(ticketRepository).save(ticket);
            verify(ticketHistoryService).addTicketHistoryManually(ticketHistoryDTO);

            // Verificar o resultado
            assertNotNull(result);
        }


//    @Test
//    void createTicketShouldReturnTicketSimpleDTO() throws ParseException {
//
//
//
//
//        when(typeRequestRepository.findById(typeRequest.getId())).thenReturn(Optional.ofNullable(typeRequest));
//        when(slaRepository.findById(idExisting)).thenReturn(Optional.ofNullable(sla));
//        when(categoryTicketRepository.findById(idExisting)).thenReturn(Optional.ofNullable(categoryTicket));
//        when(solvingAreaRepository.findById(idExisting)).thenReturn(Optional.ofNullable(solvingArea));
//
//        when(ticketMapper.toInitializedTicket(ArgumentMatchers.any(), ArgumentMatchers.any(), ArgumentMatchers.any(), ArgumentMatchers.any(), ArgumentMatchers.any(), ArgumentMatchers.any(), ArgumentMatchers.any())).thenReturn(ticket);
//
//        when(ticketRepository.save(ticket)).thenReturn(ticket);
//
//        when(ticketHistoryMapper.createDefaultTicketHistoryDTO(ArgumentMatchers.any(), ArgumentMatchers.any(), ArgumentMatchers.any())).thenReturn(ticketHistoryDTO);
//
//        when(ticketHistoryService.addTicketHistoryManually(ArgumentMatchers.any())).thenReturn(ticketHistoryDTO);
//
//        when(ticketMapper.toTicketSimpleDTO(ticket)).thenReturn(ticketSimpleDTO);
//
//        System.out.println(ticketSimpleDTO.getTypeRequest().getId());
//
//        TicketSimpleDTO result = ticketService.createTicket(ticketSimpleDTO);
//    }
    }
}
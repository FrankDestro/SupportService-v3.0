package com.dev.ServiceHelp.controller;

import com.dev.ServiceHelp.dto.TicketDTO;
import com.dev.ServiceHelp.dto.TicketSimpleDTO;
import com.dev.ServiceHelp.entities.Ticket;
import com.dev.ServiceHelp.enums.StatusTicket;
import com.dev.ServiceHelp.services.TicketService;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/ticket")
public class TicketResource {

    private final TicketService ticketService;

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @PostMapping
    public ResponseEntity<TicketSimpleDTO> createTicket(@Valid @RequestBody TicketSimpleDTO ticketSimpleDTO) throws JsonProcessingException {
        ticketSimpleDTO = ticketService.createTicket(ticketSimpleDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(ticketSimpleDTO.getId()).toUri();
        return ResponseEntity.created(uri).body(ticketSimpleDTO);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @PostMapping("/assignTicket")
    public ResponseEntity<TicketSimpleDTO> assignTicketToTechnician(@Valid @RequestBody TicketSimpleDTO ticketSimpleDTO) throws JsonProcessingException {
        ticketSimpleDTO = ticketService.assignTicketToTechnician(ticketSimpleDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(ticketSimpleDTO.getId()).toUri();
        return ResponseEntity.created(uri).body(ticketSimpleDTO);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @PostMapping("/resolveTicket")
    public ResponseEntity<TicketSimpleDTO> resolveTicket(@Valid @RequestBody TicketSimpleDTO ticketSimpleDTO) throws JsonProcessingException {
        ticketSimpleDTO = ticketService.resolveTicket(ticketSimpleDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(ticketSimpleDTO.getId()).toUri();
        return ResponseEntity.created(uri).body(ticketSimpleDTO);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @PostMapping("/pauseTicket")
    public ResponseEntity<TicketSimpleDTO> pauseTicket(@Valid @RequestBody TicketSimpleDTO ticketSimpleDTO) throws JsonProcessingException {
        ticketSimpleDTO = ticketService.pauseTicket(ticketSimpleDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(ticketSimpleDTO.getId()).toUri();
        return ResponseEntity.created(uri).body(ticketSimpleDTO);
    }


    @GetMapping("/getTicketsByCriteria")
    public ResponseEntity<Page<TicketSimpleDTO>> getTicketsByCriteria(
            @RequestParam(name = "id", defaultValue = "") Long id,
            @RequestParam(name = "registrationDate", defaultValue = "") String registrationDate,
            @RequestParam(name = "status", defaultValue = "") StatusTicket status,
            @RequestParam(name = "area", defaultValue = "") Long area,
            @RequestParam(name = "categoryTicket", defaultValue = "") Long category,
            @RequestParam(name = "typeRequest", defaultValue = "") Long type,
            Pageable pageable) {
        {
            Page<TicketSimpleDTO> list = ticketService.getTicketsByCriteria(id, registrationDate, status, area, category, type, pageable);
            return ResponseEntity.ok().body(list);
        }
    }

    @GetMapping(value = "/getTicketById/{id}")
    public ResponseEntity<TicketDTO> findTicketById(@PathVariable Long id) {
        TicketDTO dto = ticketService.getTicketById(id);
        return ResponseEntity.ok(dto);
    }
}

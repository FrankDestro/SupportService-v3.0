package com.dev.ServiceHelp.controller;

import com.dev.ServiceHelp.dto.TicketDTO;
import com.dev.ServiceHelp.dto.TicketSimpleDTO;
import com.dev.ServiceHelp.dto.TicketUpdateDTO;
import com.dev.ServiceHelp.enums.StatusTicket;
import com.dev.ServiceHelp.services.TicketService;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/ticket")
public class TicketResource {

    private final TicketService ticketService;

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @PostMapping("/create")
    public ResponseEntity<TicketSimpleDTO> createTicket(@Valid @RequestBody TicketSimpleDTO ticketSimpleDTO) throws JsonProcessingException {
        ticketSimpleDTO = ticketService.createTicket(ticketSimpleDTO);
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
            @RequestParam(name = "sla", defaultValue = "") Long sla,
            Pageable pageable) {
        {
            Page<TicketSimpleDTO> list = ticketService.getTicketsByCriteria(id, registrationDate,
                    status, area, category, type, sla, pageable);
            return ResponseEntity.ok().body(list);
        }
    }

    @GetMapping(value = "/getTicketById/{id}")
    public ResponseEntity<TicketDTO> findTicketById(@PathVariable Long id) {
        TicketDTO dto = ticketService.getTicketById(id);
        return ResponseEntity.ok(dto);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @PatchMapping(value = "/updateData/{id}")
    public ResponseEntity<TicketSimpleDTO> updateTicketData(@PathVariable Long id,
            @Valid @RequestBody TicketUpdateDTO ticketUpdateDTO) {
        TicketSimpleDTO updatedTicket = ticketService.updateTicketData(id, ticketUpdateDTO);
        return ResponseEntity.ok().body(updatedTicket);
    }
}

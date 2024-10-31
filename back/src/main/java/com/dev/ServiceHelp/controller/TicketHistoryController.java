package com.dev.ServiceHelp.controller;

import com.dev.ServiceHelp.dto.TicketHistoryDTO;
import com.dev.ServiceHelp.services.TicketHistoryService;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/ticketHistory")
public class TicketHistoryController {

    private final TicketHistoryService ticketHistoryService;

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @PostMapping("/addHistory")
    public ResponseEntity<TicketHistoryDTO> addTicketHistoryManually(@Valid @RequestBody TicketHistoryDTO ticketHistoryDTO) throws JsonProcessingException {
        ticketHistoryDTO = ticketHistoryService.addTicketHistoryManually(ticketHistoryDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(ticketHistoryDTO.getId()).toUri();
        return ResponseEntity.created(uri).body(ticketHistoryDTO);
    }

}

package com.dev.ServiceHelp.resources;

import com.dev.ServiceHelp.dto.TicketDTO;
import com.dev.ServiceHelp.dto.TicketSimpleDTO;
import com.dev.ServiceHelp.dto.UserDTO;
import com.dev.ServiceHelp.enums.StatusTicket;
import com.dev.ServiceHelp.enums.StatusUser;
import com.dev.ServiceHelp.services.TicketService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping(value = "/ticket")
public class TicketResource {

    @Autowired
    private TicketService ticketService;

    @GetMapping
    public ResponseEntity<Page<TicketSimpleDTO>> searchTicketsByParams(
            @RequestParam(name = "id", defaultValue = "") Long id,
            @RequestParam(name = "registrationDate", defaultValue = "") String registrationDate,
            @RequestParam(name = "status", defaultValue = "") StatusTicket status,
            Pageable pageable) {
        {
            Page<TicketSimpleDTO> list = ticketService.searchTicketsByParams(id, registrationDate, status, pageable);
            return ResponseEntity.ok().body(list);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<TicketDTO> findTicketById(@PathVariable Long id) {
        TicketDTO dto = ticketService.findTicketById(id);
        return ResponseEntity.ok(dto);
    }

    @PostMapping
    public ResponseEntity<TicketDTO> insert(@Valid @RequestBody TicketDTO dto) {
        dto = ticketService.createNewTicket(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<TicketDTO> update(@PathVariable Long id, @Valid @RequestBody TicketDTO dto) {
        dto = ticketService.UpdateTicket(id, dto);
        return ResponseEntity.ok().body(dto);
    }
}

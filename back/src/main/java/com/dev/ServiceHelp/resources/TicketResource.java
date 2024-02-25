package com.dev.ServiceHelp.resources;

import com.dev.ServiceHelp.dto.TicketDTO;
import com.dev.ServiceHelp.dto.UserDTO;
import com.dev.ServiceHelp.dto.UserInsertDTO;
import com.dev.ServiceHelp.services.TicketService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping(value = "/ticket")
public class TicketResource {

    @Autowired
    private TicketService ticketService;



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
}

package com.dev.ServiceHelp.resources;

import com.dev.ServiceHelp.dto.TicketDTO;
import com.dev.ServiceHelp.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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


}

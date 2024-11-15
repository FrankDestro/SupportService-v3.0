package com.dev.ServiceHelp.controller;

import com.dev.ServiceHelp.dto.CategoryTicketDTO;
import com.dev.ServiceHelp.mappers.CategoryTicketMapper;
import com.dev.ServiceHelp.services.CategoryTicketService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/categoryTicket")
public class CategoryTicketController {

    private final CategoryTicketService categoryTicketService;

    private final CategoryTicketMapper categoryTicketMapper;

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/categoryTicketAndSolvingArea")
    public ResponseEntity<List<CategoryTicketDTO>> getCategoryTicketAndSolvingArea() throws JsonProcessingException {
        List<CategoryTicketDTO> categoryTicketsAndSolvingArea = categoryTicketService.getCategoryTicketAndSolvingArea();
        return ResponseEntity.ok().body(categoryTicketsAndSolvingArea);
    }

}

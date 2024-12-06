package com.dev.ServiceHelp.controllers;

import com.dev.ServiceHelp.dto.KnowErrorDTO;
import com.dev.ServiceHelp.dto.SLADTO;
import com.dev.ServiceHelp.dto.TicketDTO;
import com.dev.ServiceHelp.dto.TicketSimpleDTO;
import com.dev.ServiceHelp.enums.StatusTicket;
import com.dev.ServiceHelp.services.KnowErrorService;
import com.dev.ServiceHelp.services.SLAService;
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
import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/knowError")
public class KnowErrorController {

    private final KnowErrorService knowErrorService;

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @GetMapping(value = "/getKnowErrorById/{id}")
    public ResponseEntity<KnowErrorDTO> getKnowErrorById(@PathVariable Long id) {
        KnowErrorDTO knowErrorDTO = knowErrorService.getKnowErrorById(id);
        return ResponseEntity.ok(knowErrorDTO);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @GetMapping("/getKnowErrorByCriteria")
    public ResponseEntity<List<KnowErrorDTO>> getTicketsByCriteria(
            @RequestParam(name = "titleText", required = false) String titleText,
            @RequestParam(name = "rootCauseText", required = false) String rootCauseText,
            @RequestParam(name = "solution", required = false) String solution,
            @RequestParam(name = "status", required = false) String status,
            @RequestParam(name = "initialDate", required = false) LocalDate initialDate,
            @RequestParam(name = "finalDate", required = false) LocalDate finalDate,
            @RequestParam(name = "sla", required = false) LocalDate initialDateResolution,
            @RequestParam(name = "finalDateResolution", required = false) LocalDate finalDateResolution
            )
        {
            List<KnowErrorDTO> list = knowErrorService.findKnowErrorsWithFilters( titleText, rootCauseText, solution, status, initialDate, finalDate,
                    initialDateResolution, finalDateResolution);
            return ResponseEntity.ok().body(list);
        }
    }

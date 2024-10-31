package com.dev.ServiceHelp.controller;

import com.dev.ServiceHelp.dto.SLADTO;
import com.dev.ServiceHelp.services.SLAService;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/sla")
public class SLAController {

    private final SLAService slaService;

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/AddSLA")
    public ResponseEntity<SLADTO> addSLAConfig(@Valid @RequestBody SLADTO slaDTO) throws JsonProcessingException {
        slaDTO = slaService.addSLAConfig(slaDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(slaDTO.getId()).toUri();
        return ResponseEntity.created(uri).body(slaDTO);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/getSlaConfig")
    public ResponseEntity<List<SLADTO>> getSlaConfig() throws JsonProcessingException {
        List<SLADTO> slaResult = slaService.getSlaConfig();
        return ResponseEntity.ok().body(slaResult);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping(value = "/updateSLA/{id}")
    public ResponseEntity<SLADTO> updateSlaConfig(@PathVariable Long id, @RequestBody SLADTO sladto) {
        sladto = slaService.updateSlaConfig(id, sladto);
        return ResponseEntity.ok().body(sladto);
    }
}



package com.dev.ServiceHelp.controllers;

import com.dev.ServiceHelp.dto.SolvingAreaDTO;
import com.dev.ServiceHelp.services.SolvingAreaService;
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
@RequestMapping(value = "/solvingArea")
public class SolvingAreaController {

    private final SolvingAreaService solvingAreaService;

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @GetMapping("/getAllSolving")
    public ResponseEntity<List<SolvingAreaDTO>> getAllSolving() throws JsonProcessingException {
        List<SolvingAreaDTO> solvingAreaResult = solvingAreaService.getAllSolving();
        return ResponseEntity.ok().body(solvingAreaResult);
    }
}



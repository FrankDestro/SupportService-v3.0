package com.dev.ServiceHelp.controllers;

import com.dev.ServiceHelp.dto.TypeRequestDTO;
import com.dev.ServiceHelp.services.TypeRequestService;
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
@RequestMapping(value = "/typeRequest")
public class TypeRequestController {

    private final TypeRequestService typeRequestService;

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @GetMapping("/getAllTypeRequest")
    public ResponseEntity<List<TypeRequestDTO>> getAllTypeRequest() throws JsonProcessingException {
        List<TypeRequestDTO> solvingAreaResult = typeRequestService.getAllTypeRequest();
        return ResponseEntity.ok().body(solvingAreaResult);
    }
}



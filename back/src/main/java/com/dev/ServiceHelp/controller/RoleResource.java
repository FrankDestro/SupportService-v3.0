package com.dev.ServiceHelp.controller;

import com.dev.ServiceHelp.dto.RoleDTO;
import com.dev.ServiceHelp.services.RoleService;
import com.fasterxml.jackson.core.JsonProcessingException;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Roles Controller")
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/roles")
@SecurityRequirement(name = "bearerAuth")
public class RoleResource {

    private final RoleService roleService;

    @Operation(summary = "Get all roles",
            description = "Only admins can get roles.",
            security = {@SecurityRequirement(name = "bearerAuth")})
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    @GetMapping("/getAllRoles")
    public ResponseEntity<List<RoleDTO>> getAllRoles() throws JsonProcessingException {
        List<RoleDTO> departmentList = roleService.getAllRoles();
        return ResponseEntity.ok().body(departmentList);
    }
}

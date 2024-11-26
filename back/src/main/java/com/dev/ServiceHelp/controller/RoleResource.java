package com.dev.ServiceHelp.controller;

import com.dev.ServiceHelp.dto.RoleDTO;
import com.dev.ServiceHelp.services.RoleService;
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
@RequestMapping(value = "/roles")
public class RoleResource {

    private final RoleService roleService;

    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    @GetMapping("/getAllRoles")
    public ResponseEntity<List<RoleDTO>> getAllRoles() throws JsonProcessingException {
        List<RoleDTO> departmentList = roleService.getAllRoles();
        return ResponseEntity.ok().body(departmentList);
    }
}

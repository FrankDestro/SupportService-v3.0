package com.dev.ServiceHelp.controller;

import com.dev.ServiceHelp.dto.DepartmentDTO;
import com.dev.ServiceHelp.services.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping(value = "/department")
public class DepartmentResource {

    @Autowired
    private DepartmentService departmentService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<DepartmentDTO> findById(@PathVariable Long id) {
        DepartmentDTO dto = departmentService.findDepartmentById(id);
        return ResponseEntity.ok(dto);
    }


}

package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.DepartmentDTO;
import com.dev.ServiceHelp.entities.Department;
import com.dev.ServiceHelp.repository.DepartmentRepository;
import com.dev.ServiceHelp.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DepartmentService {

    @Autowired
    private DepartmentRepository departmentRepository;

    @Transactional(readOnly = true)
    public DepartmentDTO findDepartmentById(Long id) {
        Department department = departmentRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Resource not found"));
        return new DepartmentDTO(department);
    }

}

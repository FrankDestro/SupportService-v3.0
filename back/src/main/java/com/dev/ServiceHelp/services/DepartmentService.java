package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.DepartmentDTO;
import com.dev.ServiceHelp.entities.Department;
import com.dev.ServiceHelp.mappers.DepartmentMapper;
import com.dev.ServiceHelp.repository.DepartmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class DepartmentService {

    private final DepartmentRepository departmentRepository;
    private final DepartmentMapper departmentMapper;

    @Transactional(readOnly = true)
    public List<DepartmentDTO> getAllDepartment() {
        List<Department> departmentList = departmentRepository.findAll();
        return departmentList.stream().map(department -> departmentMapper.toDepartmentDTO(department)).toList();
    }
}

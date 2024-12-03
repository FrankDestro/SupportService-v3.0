package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.DepartmentDTO;
import com.dev.ServiceHelp.entities.Department;
import com.dev.ServiceHelp.factory.DepartmentFactory;
import com.dev.ServiceHelp.mappers.DepartmentMapper;
import com.dev.ServiceHelp.repository.DepartmentRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.List;

class DepartmentServiceTest {

    @InjectMocks
    private DepartmentService departmentService;

    @Mock
    private DepartmentRepository departmentRepository;

    @Mock
    private DepartmentMapper departmentMapper;

    private List<Department> departmentList;
    private List<DepartmentDTO> departmentListDTO;
    private Department department;
    private DepartmentDTO departmentDTO;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        DepartmentFactory.setDepartmentMapper(departmentMapper);

        departmentList = DepartmentFactory.createDepartmentEntityList();
        departmentListDTO = DepartmentFactory.createDepartmentDTOList();
        department = DepartmentFactory.createDepartmentEntity();
        departmentDTO = DepartmentFactory.createDepartmentDTO();

    }

    @Test
    void getAllDepartmentShouldReturnDepartmentListDTO() {
        when(departmentRepository.findAll()).thenReturn(departmentList);
        when(departmentMapper.toDepartmentDTO(department)).thenReturn(departmentDTO);

        List<DepartmentDTO> result = departmentService.getAllDepartment();

        assertNotNull(result);
    }
}
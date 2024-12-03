package com.dev.ServiceHelp.factory;

import com.dev.ServiceHelp.dto.DepartmentDTO;
import com.dev.ServiceHelp.entities.Department;
import com.dev.ServiceHelp.entities.User;
import com.dev.ServiceHelp.mappers.DepartmentMapper;
import lombok.Setter;

import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class DepartmentFactory {

    @Setter
    private static DepartmentMapper departmentMapper;

    public static Department createDepartmentEntity() {
       Set<User> users = new HashSet<>();
       users.add(UserFactory.createUserEntity());
        return new Department(1L, "Desenvolvimento", users);
    }

    public static DepartmentDTO createDepartmentDTO(Department department) {
        return departmentMapper.toDepartmentDTO(department);
    }

    public static DepartmentDTO createDepartmentDTO() {
        return createDepartmentDTO(createDepartmentEntity());
    }

    private static <T> List<T> createSingletonList(T object) {
        return Collections.singletonList(object);
    }

    public static List<Department> createDepartmentEntityList() {
        return createSingletonList(createDepartmentEntity());
    }

    public static List<DepartmentDTO> createDepartmentDTOList() {
        return createSingletonList(createDepartmentDTO());
    }
}

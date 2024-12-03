package com.dev.ServiceHelp.factory;

import com.dev.ServiceHelp.dto.RoleDTO;
import com.dev.ServiceHelp.entities.Role;
import com.dev.ServiceHelp.mappers.RoleMapper;
import lombok.Setter;

import java.util.Collections;
import java.util.List;

public class RoleFactory {

    @Setter
    private static RoleMapper roleMapper;

    public static Role createRoleEntity() {
        return new Role(1L, "ROLE_ADMIN");
    }

    public static RoleDTO createRoleDTO(Role role) {
        return roleMapper.toRoleDTO(role);
    }

    public static RoleDTO createRoleDTO() {
        return createRoleDTO(createRoleEntity());
    }

    private static <T> List<T> createSingletonList(T object) {
        return Collections.singletonList(object);
    }

    public static List<Role> createRoleEntityList() {
        return createSingletonList(createRoleEntity());
    }

    public static List<RoleDTO> createRoleDTOList() {
        return createSingletonList(createRoleDTO());
    }
}

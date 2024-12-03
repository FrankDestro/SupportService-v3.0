package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.RoleDTO;
import com.dev.ServiceHelp.entities.Role;
import com.dev.ServiceHelp.factory.RoleFactory;
import com.dev.ServiceHelp.mappers.RoleMapper;
import com.dev.ServiceHelp.repository.RoleRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
public class RoleServiceTest {

    @InjectMocks
    private RoleService roleService;

    @Mock
    private UserService userService;

    @Mock
    private RoleRepository roleRepository;

    @Mock
    private RoleMapper roleMapper;

    private List<Role> roleList;
    private List<RoleDTO> roleDTOList;
    private Role role;
    private RoleDTO roleDTO;

    @BeforeEach
    void SetUp() {
        MockitoAnnotations.openMocks(this);
        RoleFactory.setRoleMapper(roleMapper);

        role = RoleFactory.createRoleEntity();
        roleDTO = RoleFactory.createRoleDTO();
        roleList = RoleFactory.createRoleEntityList();
        roleDTOList = RoleFactory.createRoleDTOList();
    }

    @Test
    void getAllRolesShouldReturnListRoles() {
        when(roleRepository.findAll()).thenReturn(roleList);
        when(roleMapper.toRoleDTO(role)).thenReturn(roleDTO);

        List<RoleDTO> result = roleService.getAllRoles();

        assertNotNull(result);

    }
}
package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.RoleDTO;
import com.dev.ServiceHelp.entities.Role;
import com.dev.ServiceHelp.mappers.RoleMapper;
import com.dev.ServiceHelp.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class RoleService {

    private final RoleRepository roleRepository;
    private final RoleMapper roleMapper;

    @Transactional(readOnly = true)
    public List<RoleDTO> getAllRoles() {
        List<Role> list = roleRepository.findAll();
        return list.stream().map(role -> roleMapper.toRoleDTO(role)).toList();
    }
}

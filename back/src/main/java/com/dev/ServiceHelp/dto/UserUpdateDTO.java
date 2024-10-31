package com.dev.ServiceHelp.dto;

import com.dev.ServiceHelp.enums.StatusUser;
import com.dev.ServiceHelp.services.validation.UserUpdateValid;

import java.util.Set;

@UserUpdateValid
public record UserUpdateDTO(
        String firstName,
        String lastName,
        String email,
        StatusUser status,
        String contactNumber,
        DepartmentDTO department,
        String imgProfile,
        String createdByUserName,
        Integer failedLoginAttempts,
        Set<RoleDTO> roles) {
}

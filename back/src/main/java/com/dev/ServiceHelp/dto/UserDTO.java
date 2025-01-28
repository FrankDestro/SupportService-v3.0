package com.dev.ServiceHelp.dto;

import com.dev.ServiceHelp.enums.StatusUser;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private StatusUser statusUser;
    private String contactNumber;
    private DepartmentDTO department;
    private SolvingAreaDTO solvingArea;
    private String imgProfile;
    private Integer failedLoginAttempts;
    private Set<RoleDTO> roles;
    private Boolean blocked;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String createdBy;
    private String updatedBy;
}

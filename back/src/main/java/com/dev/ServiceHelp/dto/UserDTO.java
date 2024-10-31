package com.dev.ServiceHelp.dto;

import java.time.Instant;
import java.util.Set;

import com.dev.ServiceHelp.enums.StatusUser;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private Instant createdAt;
    private Integer failedLoginAttempts;
    private Set<RoleDTO> roles;
    private Boolean blocked;
    private String createdByUserName;
}

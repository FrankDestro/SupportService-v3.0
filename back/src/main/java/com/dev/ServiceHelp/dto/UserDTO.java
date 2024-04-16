package com.dev.ServiceHelp.dto;

import java.time.Instant;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import com.dev.ServiceHelp.entities.Department;
import com.dev.ServiceHelp.entities.User;
import com.dev.ServiceHelp.enums.StatusUser;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data

public class UserDTO {
    private Long id;
    @NotBlank(message = "Campo obrigatório")
    private String firstName;
    private String lastName;
    @Email(message = "Favor entrar um email válido")
    private String email;
    private StatusUser status;
    private String contactNumber;
    private DepartmentDTO department;
    @JsonIgnoreProperties
    private String imgProfile;
    private Instant createdAt;
    private Integer failedLoginAttempts;
    Set<RoleDTO> roles = new HashSet<>();

    private String createdByUserName;

    public UserDTO(Department department, Long id, String firstName, String lastName, String email,
                   StatusUser status, String imgProfile, String createdByUserName, String contactNumber) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.status = status;
        this.imgProfile = imgProfile;
        this.contactNumber = contactNumber;
        this.department = new DepartmentDTO(department);
        this.createdByUserName = createdByUserName;
    }

    public UserDTO(User entity) {
        id = entity.getId();
        firstName = entity.getFirstName();
        lastName = entity.getLastName();
        email = entity.getEmail();
        status = entity.getStatusUser();
        imgProfile = entity.getImgProfile();
        createdAt = entity.getCreatedAt();
        contactNumber = entity.getContactNumber();
        entity.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
        department = new DepartmentDTO(entity.getDepartment());
        createdByUserName = entity.getCreatedByUserName();
        failedLoginAttempts = entity.getFailedLoginAttempts();
    }
}

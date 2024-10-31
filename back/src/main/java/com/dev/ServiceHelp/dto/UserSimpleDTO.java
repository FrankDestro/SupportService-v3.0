package com.dev.ServiceHelp.dto;

import com.dev.ServiceHelp.entities.Department;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserSimpleDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String imgProfile;
    private String contactNumber;
    private DepartmentDTO department;
}

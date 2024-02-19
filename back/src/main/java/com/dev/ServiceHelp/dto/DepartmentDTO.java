package com.dev.ServiceHelp.dto;

import com.dev.ServiceHelp.entities.Department;
import com.dev.ServiceHelp.entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;


@Data
@NoArgsConstructor
@AllArgsConstructor

public class DepartmentDTO {

    private Long id;
    private String description;
    

    public DepartmentDTO(Department entity) {
         id = entity.getId();
         description = entity.getDescription();
    }

}

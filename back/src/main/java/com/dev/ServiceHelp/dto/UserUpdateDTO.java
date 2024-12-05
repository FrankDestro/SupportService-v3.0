package com.dev.ServiceHelp.dto;

import com.dev.ServiceHelp.services.validation.UserUpdateValid;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@UserUpdateValid
public class UserUpdateDTO {
        private String firstName;
        private String lastName;
        private String email;
        @Pattern(regexp = "^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]).{8,}$",
                message = "A senha deve conter pelo menos uma letra maiúscula e um caractere especial, e ter no mínimo 8 caracteres")
        private String password;
        private String contactNumber;
        private DepartmentDTO department;
        private SolvingAreaDTO solvingArea;
        private String imgProfile;
}

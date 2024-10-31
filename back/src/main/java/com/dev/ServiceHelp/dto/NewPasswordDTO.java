package com.dev.ServiceHelp.dto;

import jakarta.validation.constraints.Pattern;

public record NewPasswordDTO(
        String token,
        @Pattern(regexp = "^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]).{8,}$",
                message = "A senha deve conter pelo menos uma letra maiúscula e um caractere especial, e ter no mínimo 8 caracteres")
        String password) {
}
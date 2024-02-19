package com.dev.ServiceHelp.dto;

import com.dev.ServiceHelp.services.validation.UserInsertValid;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

@UserInsertValid
public class UserInsertDTO extends UserDTO {

	@NotBlank(message = "Campo Requereido")
	@Pattern(regexp = "^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]).{8,}$", message = "A senha deve conter pelo menos uma letra maiúscula e um caractere especial, e ter no mínimo 8 caracteres")
	private String password;

	UserInsertDTO() {
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}

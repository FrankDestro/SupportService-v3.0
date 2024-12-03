package com.dev.ServiceHelp.services.validation;

import org.springframework.beans.factory.annotation.Autowired;

import com.dev.ServiceHelp.dto.UserUpdateDTO;
import com.dev.ServiceHelp.repository.UserRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class UserUpdateValidator implements ConstraintValidator<UserUpdateValid, UserUpdateDTO> {
	
	@Autowired
	private HttpServletRequest request;
	
	@Autowired
	private UserRepository repository;
	
	@Override
	public void initialize(UserUpdateValid ann) {
	}

	@Override
	public boolean isValid(UserUpdateDTO dto, ConstraintValidatorContext context) {

//		@SuppressWarnings("unchecked")
//		var uriVars = (Map<String, String>) request.getAttribute(HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE);
//		long userId = Long.parseLong(uriVars.get("id"));
//
//		List<FieldMessage> list = new ArrayList<>();
//
//		User user = repository.findByEmail(dto.getEmail());
//		if (user != null && userId != user.getId()) {
//			list.add(new FieldMessage("email", "Email já existe"));
//		}
//
//		for (FieldMessage e : list) {
//			context.disableDefaultConstraintViolation();
//			context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
//					.addConstraintViolation();
//		}
//		return list.isEmpty();
//	}

		return true;
	}
}

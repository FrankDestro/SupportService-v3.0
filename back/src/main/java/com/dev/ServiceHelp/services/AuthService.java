package com.dev.ServiceHelp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.dev.ServiceHelp.repository.PasswordRecoverRepository;
import com.dev.ServiceHelp.repository.UserRepository;

@Service
public class AuthService {
	
	@Value("${spring.mail.username}")
	private String defaultSender;

	@Value("${email.password-recover.uri}")
	private String recoverUri;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Value("${email.password-recover.token.minutes}")
	private Long tokenMinutes;

	@Autowired
	private PasswordRecoverRepository passwordRecoverRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private EmailService emailService;

//	@Transactional
//	public void createRecoverToken(EmailDTO body) {
//		User user = userRepository.findByEmail(body.getEmail());
//		if (user == null) {
//			throw new ResourceNotFoundException("Email not found");
//		}
//
//		String token = UUID.randomUUID().toString();
//
//		PasswordRecover entity = new PasswordRecover();
//		entity.setToken(token);
//		entity.setExpiration(Instant.now().plusSeconds(tokenMinutes * 60L));
//		entity.setEmail(body.getEmail());
//		passwordRecoverRepository.save(entity);
//
//		String text = "Acesse o link para definir uma nova senha (válido por " + tokenMinutes + " minutos):\n\n"
//				+ recoverUri + token;
//
//		emailService.sendEmail(body.getEmail(), "Recuperação de senha", text);
//	}
//
//	@Transactional
//	public void saveNewPassword(NewPasswordDTO body) {
//
//		List<PasswordRecover> result = passwordRecoverRepository.searchValidTokens(body.getToken(),Instant.now());
//		if(result.size() == 0) {
//			throw new ResourceNotFoundException("Token invalido");
//		}
//
//		User user = userRepository.findByEmail(result.get(0).getEmail());
//		user.setPassword(passwordEncoder.encode(body.getPassword()));
//		user = userRepository.save(user);
//	}

}

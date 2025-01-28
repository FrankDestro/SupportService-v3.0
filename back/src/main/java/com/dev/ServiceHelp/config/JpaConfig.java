package com.dev.ServiceHelp.config;

import com.dev.ServiceHelp.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import java.util.Optional;

@RequiredArgsConstructor
@Configuration
@EnableJpaAuditing
public class JpaConfig {

    private final UserService userService;

    @Bean
    public AuditorAware<String> auditorProvider() {
        return () -> Optional.ofNullable(userService.authenticated())
                .map(user -> user.getUsername());
    }
}

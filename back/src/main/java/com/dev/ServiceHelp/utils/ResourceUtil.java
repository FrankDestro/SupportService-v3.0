package com.dev.ServiceHelp.utils;

import com.dev.ServiceHelp.services.exceptions.ResourceNotFoundException;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.Instant;
import java.util.Optional;

@Component
public class ResourceUtil {
    public static <T> T getOrThrow(Optional<T> optional, String message) {
        return optional.orElseThrow(() -> new ResourceNotFoundException(message));
    }

    public Instant calculateDueDate(Instant registrationDate, Integer responseTime) {
        try {
            return registrationDate.plus(Duration.ofHours(responseTime));
        } catch (Exception e) {
            throw new RuntimeException("Erro ao calcular a data de vencimento: " + e.getMessage(), e);
        }
    }
}

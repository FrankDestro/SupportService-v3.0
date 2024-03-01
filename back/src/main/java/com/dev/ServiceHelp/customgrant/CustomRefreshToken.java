package com.dev.ServiceHelp.customgrant;

import org.springframework.security.oauth2.core.OAuth2RefreshToken;

import java.time.Instant;

public class CustomRefreshToken extends OAuth2RefreshToken {

    private Instant expiration;

    public CustomRefreshToken(String value, Instant expiration) {
        super(value, expiration, null);
        this.expiration = expiration;
    }

    public boolean isExpired() {
        return Instant.now().isAfter(expiration);
    }

}

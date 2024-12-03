package com.dev.ServiceHelp.utils;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;

public class DateTimeUtil {

    private static final ZoneId ZONE_ID = ZoneId.systemDefault();

    public static ZonedDateTime now() {
        return Instant.now().atZone(ZONE_ID);
    }
}

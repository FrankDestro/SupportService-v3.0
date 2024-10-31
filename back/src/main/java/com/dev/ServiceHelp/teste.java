package com.dev.ServiceHelp;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;

public class teste {
    public static void main(String[] args) {
        System.out.println("hora atual");
        System.out.println(Instant.now());

        // Converte para o fuso horário local
        ZonedDateTime localDateTime = Instant.now().atZone(ZoneId.systemDefault());
        System.out.println("Hora atual no fuso horário local:");
        System.out.println(localDateTime);
    }
}

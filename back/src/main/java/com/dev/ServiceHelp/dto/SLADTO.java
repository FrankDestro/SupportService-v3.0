package com.dev.ServiceHelp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SLADTO {
    private Long id;
    private String severity;
    private Integer responseTime;
}

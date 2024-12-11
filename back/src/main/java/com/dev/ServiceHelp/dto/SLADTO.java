package com.dev.ServiceHelp.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SLADTO {

    private Long id;
    @NotNull
    @Size(min = 2, max = 50)
    private String severity;
    private Integer responseTime;
}

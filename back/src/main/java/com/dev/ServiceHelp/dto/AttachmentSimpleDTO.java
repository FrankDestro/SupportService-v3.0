package com.dev.ServiceHelp.dto;

import com.dev.ServiceHelp.enums.FileType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttachmentSimpleDTO {

    private Long id;
    private String url;
    private Instant registrationDate;
    private String fileName;
    private FileType type;
}
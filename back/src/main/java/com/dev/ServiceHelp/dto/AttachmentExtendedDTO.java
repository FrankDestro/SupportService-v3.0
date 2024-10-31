package com.dev.ServiceHelp.dto;

import com.dev.ServiceHelp.entities.Ticket;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttachmentExtendedDTO extends AttachmentDTO {

    private Ticket ticket;
}

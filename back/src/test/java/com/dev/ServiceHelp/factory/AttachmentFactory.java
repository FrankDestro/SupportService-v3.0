package com.dev.ServiceHelp.factory;

import com.dev.ServiceHelp.dto.AttachmentDTO;
import com.dev.ServiceHelp.entities.Attachment;
import com.dev.ServiceHelp.entities.TicketHistory;
import com.dev.ServiceHelp.enums.FileType;
import com.dev.ServiceHelp.mappers.AttachmentMapper;
import lombok.Setter;

import java.time.Instant;

public class AttachmentFactory {

    @Setter
    public static AttachmentMapper attachmentMapper;

    public static Attachment createAttachmentEntity() {
        return new Attachment(1L, "anexo", Instant.now(),
                "file", FileType.PDF, TicketFactory.createTicketEntity(), UserFactory.createUserEntity());
    }
    public static AttachmentDTO createAttachmentDTO() {
        return new AttachmentDTO(1L, "anexo", Instant.now(),
                "file", FileType.PDF, 1L, null);
    }
}

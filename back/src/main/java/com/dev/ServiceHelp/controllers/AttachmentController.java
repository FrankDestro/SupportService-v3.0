package com.dev.ServiceHelp.controllers;

import com.dev.ServiceHelp.dto.AttachmentDTO;
import com.dev.ServiceHelp.services.AttachmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RequiredArgsConstructor
@RestController
@RequestMapping("/attachments")
public class AttachmentController {

    private final AttachmentService attachmentService;


    @PostMapping("/add")
    public ResponseEntity<AttachmentDTO> createAttachment(@RequestBody AttachmentDTO attachmentDTO) {
        AttachmentDTO savedAttachment = attachmentService.saveAttachment(attachmentDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(savedAttachment.getId()).toUri();
        return ResponseEntity.created(uri).body(savedAttachment);
    }
}

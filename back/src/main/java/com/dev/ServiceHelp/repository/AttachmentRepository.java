package com.dev.ServiceHelp.repository;

import com.dev.ServiceHelp.entities.Attachment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface AttachmentRepository extends JpaRepository<Attachment, Long> {

    Set<Attachment> findByTicketId(Long ticketId);

}
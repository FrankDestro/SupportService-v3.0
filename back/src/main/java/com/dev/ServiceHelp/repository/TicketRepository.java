package com.dev.ServiceHelp.repository;

import com.dev.ServiceHelp.entities.Ticket;
import com.dev.ServiceHelp.enums.StatusTicket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.Instant;
import java.time.LocalDate;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

    @Query("SELECT obj FROM Ticket obj " +
            "WHERE (:id IS NULL OR obj.id = :id) " +
            "AND (:registrationDate IS NULL OR :registrationDate = '' OR DATE(obj.registrationDate) = CAST(:registrationDate AS DATE)) " +
            "AND (:status IS NULL OR obj.statusTicket = :status)"
    )
    Page<Ticket> searchTicketsByParams(Long id, String registrationDate , StatusTicket status, Pageable pageable);



}

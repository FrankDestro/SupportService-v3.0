package com.dev.ServiceHelp.repository;

import com.dev.ServiceHelp.entities.*;
import com.dev.ServiceHelp.enums.StatusTicket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {

    @Query("SELECT obj FROM Ticket obj " +
            "WHERE (:id IS NULL OR obj.id = :id) " +
            "AND (:registrationDate IS NULL OR :registrationDate = '' OR CAST(obj.registrationDate AS DATE) = CAST(:registrationDate AS DATE)) " +
            "AND (:status IS NULL OR obj.statusTicket = :status) " +
            "AND (:area IS NULL OR obj.solvingArea = :area) " +
            "AND (:categoryTicket IS NULL OR obj.categoryTicket = :categoryTicket) " +
            "AND (:type IS NULL OR obj.typeRequest = :type)" +
            "AND (:sla IS NULL OR obj.sla = :sla)"
    )
    Page<Ticket> searchTicketsByParams(Long id, String registrationDate, StatusTicket status, SolvingArea area,
                                       CategoryTicket categoryTicket, TypeRequest type, SLA sla, Pageable pageable);

//    @Query("SELECT t FROM Ticket t " +
//            "JOIN FETCH t.ticketHistories " +
//            "JOIN FETCH t.attachments " +
//            "WHERE t.id = :id")
//    Ticket getTicketWithRelations(@Param("id") Long id);


    // POSTGRES
//    @Query("SELECT obj FROM Ticket obj " +
//            "WHERE (:id IS NULL OR obj.id = :id) " +
//            "AND (:registrationDate IS NULL OR :registrationDate = '' OR DATE(obj.registrationDate) = CAST(:registrationDate AS DATE)) " +
//            "AND (:status IS NULL OR obj.statusTicket = :status)"
//    )
//    Page<Ticket> searchTicketsByParams(Long id, String registrationDate , StatusTicket status, Pageable pageable);

}

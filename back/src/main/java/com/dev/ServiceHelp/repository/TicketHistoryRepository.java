package com.dev.ServiceHelp.repository;

import com.dev.ServiceHelp.entities.TicketHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface TicketHistoryRepository extends JpaRepository<TicketHistory, Long> {

    Set<TicketHistory> findByTicketId(Long ticketId);


}

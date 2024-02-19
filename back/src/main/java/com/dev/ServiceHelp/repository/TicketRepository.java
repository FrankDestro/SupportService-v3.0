package com.dev.ServiceHelp.repository;

import com.dev.ServiceHelp.entities.Role;
import com.dev.ServiceHelp.entities.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

}

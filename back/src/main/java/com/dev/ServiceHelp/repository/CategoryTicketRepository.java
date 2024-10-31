package com.dev.ServiceHelp.repository;

import com.dev.ServiceHelp.entities.CategoryTicket;
import com.dev.ServiceHelp.entities.SolvingArea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryTicketRepository extends JpaRepository<CategoryTicket, Long> {
    
}

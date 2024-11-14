package com.dev.ServiceHelp.repository;

import com.dev.ServiceHelp.entities.CategoryTicket;
import com.dev.ServiceHelp.entities.SolvingArea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryTicketRepository extends JpaRepository<CategoryTicket, Long> {

    @Query(value = "SELECT ct.* FROM category_ticket ct " +
            "JOIN solving_area sa ON ct.solving_area_id = sa.id", nativeQuery = true)
    List<CategoryTicket> findAllCategoryTicketsWithSolvingArea();
}

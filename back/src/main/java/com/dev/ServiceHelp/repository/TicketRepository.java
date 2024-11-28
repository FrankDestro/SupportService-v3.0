package com.dev.ServiceHelp.repository;

import com.dev.ServiceHelp.entities.*;
import com.dev.ServiceHelp.enums.StatusTicket;
import com.dev.ServiceHelp.projections.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {

    @Query("SELECT obj FROM Ticket obj " +
            "WHERE (:id IS NULL OR obj.id = :id) " +
            "AND (:registrationDate IS NULL OR :registrationDate = '' OR CAST(obj.registrationDate AS DATE) = CAST(:registrationDate AS DATE)) " +
            "AND (:status IS NULL OR obj.statusTicket = :status) " +
            "AND (:area IS NULL OR obj.solvingArea = :area) " +
            "AND (:categoryTicket IS NULL OR obj.categoryTicket = :categoryTicket) " +
            "AND (:type IS NULL OR obj.typeRequest = :type) " +
            "AND (:sla IS NULL OR obj.sla = :sla) " +
            "AND (:technicianID IS NULL OR obj.technician.id = :technicianID) " +
            "AND (:requesterID IS NULL OR obj.requester.id = :requesterID) " +
            "AND (:solvingAreaID IS NULL OR obj.solvingArea.id = :solvingAreaID)")
    Page<Ticket> searchTicketsByParams(
            Long id,
            String registrationDate,
            StatusTicket status,
            SolvingArea area,
            CategoryTicket categoryTicket,
            TypeRequest type,
            SLA sla,
            Long technicianID,
            Long requesterID,
            Long solvingAreaID,
            Pageable pageable);

    @Query(nativeQuery = true, value =
            """
                    SELECT
                        COUNT(t.id) AS totalTickets,
                        SUM(CASE WHEN t.status_ticket = 0 THEN 1 ELSE 0 END) AS totalOpened,
                        SUM(CASE WHEN t.status_ticket = 4 THEN 1 ELSE 0 END) AS totalFinished,
                        SUM(CASE WHEN t.status_ticket = 1 THEN 1 ELSE 0 END) AS totalInProgress,
                        SUM(CASE WHEN t.status_ticket = 2 THEN 1 ELSE 0 END) AS totalFrozen,
                        SUM(CASE WHEN t.status_ticket = 3 THEN 1 ELSE 0 END) AS totalCanceled,
                        SUM(CASE WHEN t.due_date::DATE = CURRENT_DATE THEN 1 ELSE 0 END) AS totalDueToday
                    FROM public.ticket AS t
                    WHERE t.registration_date >= CURRENT_DATE
                      AND t.registration_date < CURRENT_DATE + INTERVAL '1 day';
                    """)
    ActivityPanelSummaryTicketsProjection ActivityPanelSummaryTickets();

    @Query(nativeQuery = true, value = """
            SELECT
                COUNT(t.id) AS totalTickets, 
                ROUND(SUM(CASE WHEN t.status_ticket = 0 THEN 1 ELSE 0 END) * 100.0 / COUNT(t.id), 2) AS totalOpenedPercent, 
                ROUND(SUM(CASE WHEN t.status_ticket = 4 THEN 1 ELSE 0 END) * 100.0 / COUNT(t.id), 2) AS totalFinishedPercent, 
                ROUND(SUM(CASE WHEN t.status_ticket = 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(t.id), 2) AS totalInProgressPercent, 
                ROUND(SUM(CASE WHEN t.status_ticket = 2 THEN 1 ELSE 0 END) * 100.0 / COUNT(t.id), 2) AS totalFrozenPercent, 
                ROUND(SUM(CASE WHEN t.status_ticket = 3 THEN 1 ELSE 0 END) * 100.0 / COUNT(t.id), 2) AS totalCanceledPercent,  
                ROUND(SUM(CASE WHEN t.due_date::DATE = CURRENT_DATE THEN 1 ELSE 0 END) * 100.0 / COUNT(t.id), 2) AS totalDueTodayPercent
            FROM public.ticket AS t
            WHERE t.registration_date >= CURRENT_DATE
                AND t.registration_date < CURRENT_DATE + INTERVAL '1 day';
            """)
    ActivityPanelSummaryPercentTicketsProjection ActivityPanelSummaryPercentTickets();

    @Query(nativeQuery = true, value = """
            SELECT
                COUNT(t.id) AS totalTickets,
                ROUND(SUM(CASE WHEN t.sla_id = 1 THEN 1 ELSE 0 END) * 100.0 / COUNT(t.id), 2) AS totalLow, 
                ROUND(SUM(CASE WHEN t.sla_id = 2 THEN 1 ELSE 0 END) * 100.0 / COUNT(t.id), 2) AS totalMedium, 
                ROUND(SUM(CASE WHEN t.sla_id = 3 THEN 1 ELSE 0 END) * 100.0 / COUNT(t.id), 2) AS totalHigh,  
                ROUND(SUM(CASE WHEN t.sla_id = 4 THEN 1 ELSE 0 END) * 100.0 / COUNT(t.id), 2) AS totalCritical, 
                ROUND(SUM(CASE WHEN t.sla_id = 5 THEN 1 ELSE 0 END) * 100.0 / COUNT(t.id), 2) AS totalUrgent
            FROM public.ticket AS t
            WHERE t.registration_date >= CURRENT_DATE
                AND t.registration_date < CURRENT_DATE + INTERVAL '1 day';
            """)
    ActivityPanelSummaryTicketsByUrgencyProjection ActivityPanelSummaryTicketsByUrgency();

    @Query(nativeQuery = true, value = """
              SELECT
                  COUNT(t.id) AS totalTickets, 
                  SUM(CASE WHEN t.sla_id = 1 THEN 1 ELSE 0 END) AS totalLow, 
                  SUM(CASE WHEN t.sla_id = 2 THEN 1 ELSE 0 END) AS totalMedium,
                  SUM(CASE WHEN t.sla_id = 3 THEN 1 ELSE 0 END) AS totalHigh,
                  SUM(CASE WHEN t.sla_id = 4 THEN 1 ELSE 0 END) AS totalCritical,
                  SUM(CASE WHEN t.sla_id = 5 THEN 1 ELSE 0 END) AS totalUrgent
              FROM public.ticket AS t
              WHERE t.registration_date >= CURRENT_DATE
                  AND t.registration_date < CURRENT_DATE + INTERVAL '1 day';
            """)
    ActivityPanelSummaryTicketsValueByUrgencyProjection ActivityPanelSummaryTicketsValueByUrgency();

    @Query(nativeQuery = true, value = """
            SELECT
                ROUND(AVG(EXTRACT(EPOCH FROM (t.completion_date - t.registration_date)) / 60)) AS timeMediumResolution
            FROM public.ticket AS t
            WHERE t.status_ticket = 4
                AND t.completion_date IS NOT NULL
                AND t.registration_date IS NOT NULL
                AND t.completion_date >= CURRENT_DATE
                AND t.completion_date < CURRENT_DATE + INTERVAL '1 day';
            """)
    ActivityPanelSlaIndicatorProjection ActivityPanelSlaIndicator();

    @Query(nativeQuery = true, value = """
            SELECT
            DATE_TRUNC('hour', t.completion_date) AS serviceHour,
            COUNT(t.id) AS services
            FROM public.ticket AS t
                WHERE t.status_ticket = 4
                  AND t.completion_date >= CURRENT_DATE
                  AND t.completion_date < CURRENT_DATE + INTERVAL '1 day'
                GROUP BY serviceHour
                ORDER BY serviceHour;
            """)
    List<ActivityPanelServiceByDayProjection> activityPanelServiceByDay();


















//    @Query("SELECT obj FROM Ticket obj " +
//            "WHERE (:id IS NULL OR obj.id = :id) " +
//            "AND (:registrationDate IS NULL OR :registrationDate = '' OR CAST(obj.registrationDate AS DATE) = CAST(:registrationDate AS DATE)) " +
//            "AND (:status IS NULL OR obj.statusTicket = :status) " +
//            "AND (:area IS NULL OR obj.solvingArea = :area) " +
//            "AND (:categoryTicket IS NULL OR obj.categoryTicket = :categoryTicket) " +
//            "AND (:type IS NULL OR obj.typeRequest = :type)" +
//            "AND (:sla IS NULL OR obj.sla = :sla)"
//    )
//    Page<Ticket> searchTicketsByParams(Long id, String registrationDate, StatusTicket status, SolvingArea area,
//                                       CategoryTicket categoryTicket, TypeRequest type, SLA sla, Pageable pageable);

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

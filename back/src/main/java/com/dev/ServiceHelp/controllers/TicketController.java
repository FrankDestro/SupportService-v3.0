package com.dev.ServiceHelp.controllers;

import com.dev.ServiceHelp.dto.TicketDTO;
import com.dev.ServiceHelp.dto.TicketSimpleDTO;
import com.dev.ServiceHelp.dto.TicketUpdateDTO;
import com.dev.ServiceHelp.enums.StatusTicket;
import com.dev.ServiceHelp.projections.*;
import com.dev.ServiceHelp.services.TicketService;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.text.ParseException;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/ticket")
public class TicketController {

    private final TicketService ticketService;

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @PostMapping("/create")
    public ResponseEntity<TicketSimpleDTO> createTicket(@Valid @RequestBody TicketSimpleDTO ticketSimpleDTO) throws JsonProcessingException {
        ticketSimpleDTO = ticketService.createTicket(ticketSimpleDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(ticketSimpleDTO.getId()).toUri();
        return ResponseEntity.created(uri).body(ticketSimpleDTO);
    }

    @GetMapping("/getTicketsByCriteria")
    public ResponseEntity<Page<TicketSimpleDTO>> getTicketsByCriteria(
            @RequestParam(name = "id", defaultValue = "") Long id,
            @RequestParam(name = "registrationDate", defaultValue = "") String registrationDate,
            @RequestParam(name = "status", defaultValue = "") StatusTicket status,
            @RequestParam(name = "area", defaultValue = "") Long area,
            @RequestParam(name = "categoryTicket", defaultValue = "") Long category,
            @RequestParam(name = "typeRequest", defaultValue = "") Long type,
            @RequestParam(name = "sla", defaultValue = "") Long sla,
            @RequestParam(name = "ticketsAssignedToMe", required = false) Boolean ticketsAssignedToMe,
            @RequestParam(name = "myOpenTickets", required = false) Boolean myOpenTickets,
            @RequestParam(name = "hasTicketsInMyArea", required = false) Boolean hasTicketsInMyArea,
            Pageable pageable) {
        {
            Page<TicketSimpleDTO> list = ticketService.getTicketsByCriteria(id, registrationDate,
                    status, area, category, type, sla, ticketsAssignedToMe, myOpenTickets, hasTicketsInMyArea, pageable);
            return ResponseEntity.ok().body(list);
        }
    }

    @GetMapping(value = "/getTicketById/{id}")
    public ResponseEntity<TicketDTO> findTicketById(@PathVariable Long id) {
        TicketDTO dto = ticketService.getTicketById(id);
        return ResponseEntity.ok(dto);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @PatchMapping(value = "/updateData/{id}")
    public ResponseEntity<TicketSimpleDTO> updateTicketData(@PathVariable Long id,
                                                            @Valid @RequestBody TicketUpdateDTO ticketUpdateDTO) {
        TicketSimpleDTO updatedTicket = ticketService.updateTicketData(id, ticketUpdateDTO);
        return ResponseEntity.ok().body(updatedTicket);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @GetMapping(value = "/getActivityPanelSummaryTickets")
    public ResponseEntity<ActivityPanelSummaryTicketsProjection> getActivityPanelSummaryTickets() throws ParseException {
        ActivityPanelSummaryTicketsProjection activityPanelSummaryTicketsProjection = ticketService.getActivityPanelSummaryTickets();
        return ResponseEntity.ok(activityPanelSummaryTicketsProjection);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @GetMapping(value = "/getActivityPanelSummaryPercentTickets")
    public ResponseEntity<ActivityPanelSummaryPercentTicketsProjection> getActivityPanelSummaryPercentTickets() throws ParseException {
        ActivityPanelSummaryPercentTicketsProjection activityPanelSummaryPercentTicketsProjection = ticketService.getActivityPanelSummaryPercentTickets();
        return ResponseEntity.ok(activityPanelSummaryPercentTicketsProjection);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @GetMapping(value = "/getActivityPanelSummaryTicketsByUrgency")
    public ResponseEntity<ActivityPanelSummaryTicketsByUrgencyProjection> getActivityPanelSummaryTicketsByUrgency() throws ParseException {
        ActivityPanelSummaryTicketsByUrgencyProjection activityPanelSummaryPercentTicketsProjection = ticketService.getActivityPanelSummaryTicketsByUrgency();
        return ResponseEntity.ok(activityPanelSummaryPercentTicketsProjection);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @GetMapping(value = "/getActivityPanelSummaryTicketsValueByUrgencyProjection")
    public ResponseEntity<ActivityPanelSummaryTicketsValueByUrgencyProjection> getActivityPanelSummaryTicketsValueByUrgencyProjection() throws ParseException {
        ActivityPanelSummaryTicketsValueByUrgencyProjection activityPanelSummaryTicketsValueByUrgencyProjection = ticketService.getActivityPanelSummaryTicketsValueByUrgencyProjection();
        return ResponseEntity.ok(activityPanelSummaryTicketsValueByUrgencyProjection);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @GetMapping(value = "/getActivityPanelTimeMediumResolution")
    public ResponseEntity<ActivityPanelTimeMediumResolution> getActivityPanelTimeMediumResolution() throws ParseException {
        ActivityPanelTimeMediumResolution activityPanelTimeMediumResolution = ticketService.getActivityPanelTimeMediumResolution();
        return ResponseEntity.ok(activityPanelTimeMediumResolution);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @GetMapping(value = "/getActivityPanelServiceByDay")
    public ResponseEntity<List<ActivityPanelServiceByDayProjection>> getActivityPanelServiceByDay() throws ParseException {
        List<ActivityPanelServiceByDayProjection> activityPanelServiceByDay = ticketService.getActivityPanelServiceByDay();
        return ResponseEntity.ok(activityPanelServiceByDay);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @GetMapping(value = "/getActivityPanelPercentOnSla")
    public ResponseEntity <ActivityPanelPercentOnSlaProjection> getActivityPanelPercentOnSla() throws ParseException {
        ActivityPanelPercentOnSlaProjection activityPanelPercentOnSla = ticketService.getActivityPanelPercentOnSla();
        return ResponseEntity.ok(activityPanelPercentOnSla);
    }

    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_OPERATOR')")
    @GetMapping(value = "/getActivityPanelAverageFirstResponseTime")
    public ResponseEntity <activityPanelAverageFirstResponseTimeProjection> getActivityPanelAverageFirstResponseTime() throws ParseException {
        activityPanelAverageFirstResponseTimeProjection activityPanelAverageFirstResponseTime = ticketService.getActivityPanelAverageFirstResponseTime();
        return ResponseEntity.ok(activityPanelAverageFirstResponseTime);
    }
}

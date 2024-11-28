package com.dev.ServiceHelp.projections;

public interface ActivityPanelSummaryTicketsByUrgencyProjection {

    Integer getTotalTickets();

    Double getTotalLow();

    Double getTotalMedium();

    Double getTotalHigh();

    Double getTotalCritical();

    Double getTotalUrgent();
}

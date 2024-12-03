package com.dev.ServiceHelp.projections;

public interface ActivityPanelSummaryTicketsValueByUrgencyProjection {

    Integer getTotalTickets();

    Integer getTotalLow();

    Integer getTotalMedium();

    Integer getTotalHigh();

    Integer getTotalCritical();

    Integer getTotalUrgent();
}

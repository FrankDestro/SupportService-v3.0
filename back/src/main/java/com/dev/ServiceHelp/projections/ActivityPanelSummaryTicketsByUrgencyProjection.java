package com.dev.ServiceHelp.projections;

public interface ActivityPanelSummaryTicketsByUrgencyProjection {

    Integer getTotalTickets();

    Double getTotalLowPercent();
    Integer getTotalLowQuantity();

    Double getTotalMediumPercent();
    Integer getTotalMediumQuantity();

    Double getTotalHighPercent();
    Integer getTotalHighQuantity();

    Double getTotalCriticalPercent();
    Integer getTotalCriticalQuantity();

    Double getTotalUrgentPercent();
    Integer getTotalUrgentQuantity();
}

package com.dev.ServiceHelp.projections;

public interface ActivityPanelSummaryPercentTicketsProjection {

    Integer getTotalTickets();

    Double getTotalOpenedPercent();

    Double getTotalFinishedPercent();

    Double getTotalInProgressPercent();

    Double getTotalFrozenPercent();

    Double getTotalCanceledPercent();

    Double getTotalDueTodayPercent();
}

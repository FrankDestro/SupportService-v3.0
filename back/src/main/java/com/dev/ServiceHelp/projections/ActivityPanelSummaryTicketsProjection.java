package com.dev.ServiceHelp.projections;

public interface ActivityPanelSummaryTicketsProjection {

    Integer getTotalTickets();

    Integer getTotalOpened();

    Integer getTotalFinished();

    Integer getTotalInProgress();

    Integer getTotalFrozen();

    Integer getTotalCanceled();

    Integer getTotalDueToday();
}





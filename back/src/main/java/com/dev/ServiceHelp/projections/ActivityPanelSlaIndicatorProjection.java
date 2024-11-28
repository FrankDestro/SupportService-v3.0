package com.dev.ServiceHelp.projections;

import lombok.Data;

public interface ActivityPanelSlaIndicatorProjection {

    Integer getTimeMediumResolution();
    Double getPercentOnSla();
}

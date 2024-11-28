package com.dev.ServiceHelp.projections;

import java.sql.Timestamp;

public interface ActivityPanelServiceByDayProjection {

    Timestamp getServiceHour();
    Integer getServices();

}

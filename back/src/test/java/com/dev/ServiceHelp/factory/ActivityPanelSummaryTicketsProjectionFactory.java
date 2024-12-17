package com.dev.ServiceHelp.factory;

import com.dev.ServiceHelp.projections.ActivityPanelSummaryTicketsProjection;

public class ActivityPanelSummaryTicketsProjectionFactory {

    public static ActivityPanelSummaryTicketsProjection createInstanceActivityPanelSummaryTicketsProjection(Class<ActivityPanelSummaryTicketsProjection> activityPanelSummaryTicketsProjectionClass) {

       ActivityPanelSummaryTicketsProjection activityPanelSummaryTicketsProjection = new ActivityPanelSummaryTicketsProjection() {
           @Override
           public Integer getTotalTickets() {
               return 10;
           }

           @Override
           public Integer getTotalOpened() {
               return 2;
           }

           @Override
           public Integer getTotalFinished() {
               return 4;
           }

           @Override
           public Integer getTotalInProgress() {
               return 5;
           }

           @Override
           public Integer getTotalFrozen() {
               return 10;
           }

           @Override
           public Integer getTotalCanceled() {
               return 12;
           }

           @Override
           public Integer getTotalDueToday() {
               return 12;
           }
       };

        return activityPanelSummaryTicketsProjection;
    }
}

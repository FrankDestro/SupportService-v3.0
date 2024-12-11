package com.dev.ServiceHelp.strategy.factory;

import com.dev.ServiceHelp.enums.StatusTicket;
import com.dev.ServiceHelp.strategy.StatusTicketStrategy;
import com.dev.ServiceHelp.strategy.strategyimpl.CanceledStatusStrategy;
import com.dev.ServiceHelp.strategy.strategyimpl.FinishedStatusStrategy;
import com.dev.ServiceHelp.strategy.strategyimpl.FrozenStatusStrategy;
import com.dev.ServiceHelp.strategy.strategyimpl.InProgressStatusStrategy;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.EnumMap;
import java.util.Map;

@Component
public class StatusTicketStrategyFactory {

    private final Map<StatusTicket, StatusTicketStrategy> strategies = new EnumMap<>(StatusTicket.class);

    @Autowired
    public StatusTicketStrategyFactory(
            CanceledStatusStrategy canceledStatusStrategy,
            FinishedStatusStrategy finishedStatusStrategy,
            FrozenStatusStrategy frozenStatusStrategy,
            InProgressStatusStrategy inProgressStatusStrategy
    ) {
        strategies.put(StatusTicket.CANCELED, canceledStatusStrategy);
        strategies.put(StatusTicket.FINISHED, finishedStatusStrategy);
        strategies.put(StatusTicket.FROZEN, frozenStatusStrategy);
        strategies.put(StatusTicket.IN_PROGRESS, inProgressStatusStrategy);
    }

    public StatusTicketStrategy getStrategy(StatusTicket statusTicket) {
        StatusTicketStrategy strategy = strategies.get(statusTicket);
        if (strategy == null) {
            throw new UnsupportedOperationException("Nenhuma estratégia encontrada para o status: " + statusTicket);
        }
        return strategy;
    }
}

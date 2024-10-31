package com.dev.ServiceHelp.mappers;

import com.dev.ServiceHelp.dto.TicketHistoryDTO;
import com.dev.ServiceHelp.entities.TicketHistory;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TicketHistoryMapper {

    TicketHistoryDTO toTicketHistoryDTO(TicketHistory ticketHistory);

    TicketHistory toTicketHistoryEntity(TicketHistoryDTO ticketHistoryDTO);
}

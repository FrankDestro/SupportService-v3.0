package com.dev.ServiceHelp.mappers;

import com.dev.ServiceHelp.dto.CategoryTicketDTO;
import com.dev.ServiceHelp.entities.CategoryTicket;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CategoryTicketMapper {

    CategoryTicketDTO toCategoryTicketDTO(CategoryTicket categoryTicket);
    CategoryTicket toCategoryTicketEntity(CategoryTicketDTO categoryTicketDTO);
}

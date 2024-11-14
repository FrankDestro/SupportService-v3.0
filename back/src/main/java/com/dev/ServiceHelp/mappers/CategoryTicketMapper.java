package com.dev.ServiceHelp.mappers;

import com.dev.ServiceHelp.dto.CategoryTicketDTO;
import com.dev.ServiceHelp.entities.CategoryTicket;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CategoryTicketMapper {


    @Mapping(target = "solvingAreaDTO", source = "solvingArea")
    CategoryTicketDTO toCategoryTicketDTO(CategoryTicket categoryTicket);
    CategoryTicket toCategoryTicketEntity(CategoryTicketDTO categoryTicketDTO);
}

package com.dev.ServiceHelp.mappers;

import com.dev.ServiceHelp.dto.SolvingAreaDTO;
import com.dev.ServiceHelp.entities.SolvingArea;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface SolvingAreaMapper {

    SolvingAreaDTO toSolvingAreaDTO(SolvingArea solvingArea);
    SolvingArea toSolvingAreaEntity(SolvingAreaDTO solvingAreaDTO);
}

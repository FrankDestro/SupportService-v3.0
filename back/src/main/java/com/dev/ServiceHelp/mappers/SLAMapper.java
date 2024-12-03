package com.dev.ServiceHelp.mappers;

import com.dev.ServiceHelp.dto.SLADTO;
import com.dev.ServiceHelp.entities.SLA;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface SLAMapper {

    SLADTO toSLADTO(SLA sla);
    SLA toSLAEntity(SLADTO sladto);

    @Mapping(target = "id", ignore = true)
    void updateSlaEntityFromDTO(SLADTO sladto, @MappingTarget SLA sla);
}

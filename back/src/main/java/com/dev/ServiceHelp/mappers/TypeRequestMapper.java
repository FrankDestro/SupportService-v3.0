package com.dev.ServiceHelp.mappers;

import com.dev.ServiceHelp.dto.TypeRequestDTO;
import com.dev.ServiceHelp.entities.TypeRequest;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TypeRequestMapper {

    TypeRequestDTO toTypeRequestDTO(TypeRequest typeRequest);

    TypeRequest toTypeRequestEntity(TypeRequestDTO typeRequestDTO);
}

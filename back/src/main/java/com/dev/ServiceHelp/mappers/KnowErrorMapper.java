package com.dev.ServiceHelp.mappers;

import com.dev.ServiceHelp.dto.KnowErrorDTO;
import com.dev.ServiceHelp.entities.KnowError;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface KnowErrorMapper {

    @Mapping(target = "userID", source = "registratorUser.id")
    @Mapping(target = "userEmail", source = "registratorUser.email")
    KnowErrorDTO toKnowErrorDTO (KnowError knowError);

    KnowError toKnowErrorEntity (KnowErrorDTO knowErrorDTO);

}

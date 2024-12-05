package com.dev.ServiceHelp.mappers;

import com.dev.ServiceHelp.dto.UserDTO;
import com.dev.ServiceHelp.dto.UserUpdateDTO;
import com.dev.ServiceHelp.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.util.Optional;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDTO toUserDTO (User user);

    User toUserEntity(UserDTO userDTO);

    @Mapping(target = "id", ignore = true)
    void updateUserEntityFromDTO(UserUpdateDTO userUpdateDTO, @MappingTarget User user);

}

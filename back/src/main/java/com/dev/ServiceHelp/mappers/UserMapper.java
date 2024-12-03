package com.dev.ServiceHelp.mappers;

import com.dev.ServiceHelp.dto.UserDTO;
import com.dev.ServiceHelp.entities.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDTO toUserDTO (User user);

    User toUserEntity(UserDTO userDTO);


}

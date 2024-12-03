package com.dev.ServiceHelp.factory;

import com.dev.ServiceHelp.dto.UserDTO;
import com.dev.ServiceHelp.entities.User;
import com.dev.ServiceHelp.enums.StatusUser;
import com.dev.ServiceHelp.mappers.UserMapper;
import lombok.Setter;

import java.time.Instant;
import java.util.Collections;
import java.util.List;

public class UserFactory {

    @Setter
    private static UserMapper userMapper;

    public static User createUserEntity() {
        User user = new User(
                1L,
                "João",
                "Silva",
                "joao.solicitante@empresa.com",
                "senha",
                "11999998888",
                StatusUser.ACTIVE,
                "foto",
                Instant.now(),
                Instant.now(),
                0,
                "admin",
                false,
                null,
                null,
                null,
                null,
                null,
                null,
                null);
        return user;
    }

    public static UserDTO createUserDTO(User user) {
        UserDTO userDTO = new UserDTO(
                1L,
                "João",
                "Silva",
                "joao.solicitante@empresa.com",
                StatusUser.ACTIVE,
                "11999998888",
                null,
                null,
                "foto",
                Instant.now(),
                0,
                null,
                false,
                "admin"
        );
        return userDTO;
    }

    public static UserDTO createUserDTO() {
        return createUserDTO(createUserEntity());
    }

    public static List<User> createUserEntityList() {
        return createSingletonList(createUserEntity());
    }

    public static List<UserDTO> createUserDTOList() {
        return createSingletonList(createUserDTO());
    }

    private static <T> List<T> createSingletonList(T object) {
        return Collections.singletonList(object);
    }
}


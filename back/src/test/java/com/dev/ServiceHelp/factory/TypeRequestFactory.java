package com.dev.ServiceHelp.factory;

import com.dev.ServiceHelp.dto.TypeRequestDTO;
import com.dev.ServiceHelp.entities.TypeRequest;
import com.dev.ServiceHelp.mappers.TypeRequestMapper;
import lombok.Setter;

import java.util.Collections;
import java.util.List;

public class TypeRequestFactory {

    @Setter
    private static TypeRequestMapper typeRequestMapper;

    public static TypeRequest createTypeRequestEntity() {
        return new TypeRequest(1L, "Problema");
    }

    public static TypeRequestDTO createTypeRequestDTO(TypeRequest typeRequest) {
        return typeRequestMapper.toTypeRequestDTO(typeRequest);
    }

    public static TypeRequestDTO createTypeRequestDTO() {
        return createTypeRequestDTO(createTypeRequestEntity());
    }

    private static <T> List<T> createSingletonList(T object) {
        return Collections.singletonList(object);
    }

    public static List<TypeRequest> createTypeRequestEntityList() {
        return createSingletonList(createTypeRequestEntity());
    }

    public static List<TypeRequestDTO> createTypeRequestDTOList() {
        return createSingletonList(createTypeRequestDTO());
    }
}

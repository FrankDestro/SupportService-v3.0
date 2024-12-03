package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.TypeRequestDTO;
import com.dev.ServiceHelp.entities.TypeRequest;
import com.dev.ServiceHelp.factory.TypeRequestFactory;
import com.dev.ServiceHelp.mappers.TypeRequestMapper;
import com.dev.ServiceHelp.repository.TypeRequestRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

class TypeRequestServiceTest {

    @InjectMocks
    private TypeRequestService typeRequestService;

    @Mock
    private TypeRequestRepository typeRequestRepository;

    @Mock
    private TypeRequestMapper typeRequestMapper;

    private List<TypeRequest> typeRequestList;
    private List<TypeRequestDTO> typeRequestListDTO;
    private TypeRequest typeRequest;
    private TypeRequestDTO typeRequestDTO;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        TypeRequestFactory.setTypeRequestMapper(typeRequestMapper);

        typeRequestList = TypeRequestFactory.createTypeRequestEntityList();
        typeRequestListDTO = TypeRequestFactory.createTypeRequestDTOList();
        typeRequest = TypeRequestFactory.createTypeRequestEntity();
        typeRequestDTO = TypeRequestFactory.createTypeRequestDTO();
    }


    @Test
    void getAllTypeRequestShouldReturnListTypeRequest() {
        when(typeRequestRepository.findAll()).thenReturn(typeRequestList);
        when(typeRequestMapper.toTypeRequestDTO(typeRequest)).thenReturn(typeRequestDTO);

        List<TypeRequestDTO> result = typeRequestService.getAllTypeRequest();

        assertNotNull(result);

    }
}
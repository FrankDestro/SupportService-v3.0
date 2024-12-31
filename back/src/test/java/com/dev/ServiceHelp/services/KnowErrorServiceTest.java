package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.KnowErrorDTO;
import com.dev.ServiceHelp.entities.KnowError;
import com.dev.ServiceHelp.factory.KnowErrorFactory;
import com.dev.ServiceHelp.mappers.KnowErrorMapper;
import com.dev.ServiceHelp.repository.KnowErrorRepository;
import com.dev.ServiceHelp.utils.ResourceUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockedStatic;
import org.mockito.MockitoAnnotations;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.mockStatic;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.*;

class KnowErrorServiceTest {

    @InjectMocks
    private KnowErrorService knowErrorService;

    @Mock
    private KnowErrorRepository knowErrorRepository;

    @Mock
    private KnowErrorMapper knowErrorMapper;

    private KnowError knowError;
    private KnowErrorDTO knowErrorDTO;
    private Long existingId;
    private PageImpl<KnowError> knowErrorPaged;
    private String titleText;
    private Pageable pageable;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        KnowErrorFactory.setKnowErrorMapper(knowErrorMapper);
        knowError = KnowErrorFactory.createKnowErrorEntity();
        knowErrorDTO = KnowErrorFactory.createKnowErrorDTO();
        existingId = 1L;
        knowErrorPaged = new PageImpl<>(List.of(knowError));
        pageable = PageRequest.of(0, 12);
        titleText = "example title";
    }

    @Test
    void getKnowErrorByIdShouldReturnKnowErrorDTOWhenIdExisting() {
        try (MockedStatic<ResourceUtil> mockedResourceUtil = mockStatic(ResourceUtil.class)) {
            KnowError knowError = new KnowError();
            KnowErrorDTO knowErrorDTO = new KnowErrorDTO();

            mockedResourceUtil
                    .when(() -> ResourceUtil.getOrThrow(eq(Optional.of(knowError)), anyString()))
                    .thenReturn(knowError);

            when(knowErrorMapper.toKnowErrorDTO(knowError)).thenReturn(knowErrorDTO);
            when(knowErrorRepository.findById(existingId)).thenReturn(Optional.of(knowError));

            KnowErrorDTO result = knowErrorService.getKnowErrorById(existingId);

            assertNotNull(result);
            assertEquals(knowErrorDTO.getId(), result.getId());
        }
    }

    @Test
    void findKnowErrorsWithFiltersShouldReturnPageKnowErrorDTO() {

    when(knowErrorRepository.findKnowErrorsWithFilters(
            null,
            titleText,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            pageable)).thenReturn(knowErrorPaged);

    when(knowErrorMapper.toKnowErrorDTO(knowError)).thenReturn(knowErrorDTO);

        Page<KnowErrorDTO> result = knowErrorService.findKnowErrorsWithFilters( null,
                titleText,
                null,
                null,
                null,
                null,
                null,
                null,
                null, pageable);

        assertNotNull(result);
    }
}
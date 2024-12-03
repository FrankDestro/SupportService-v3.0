package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.SLADTO;
import com.dev.ServiceHelp.entities.SLA;
import com.dev.ServiceHelp.services.exceptions.ResourceNotFoundException;
import com.dev.ServiceHelp.factory.SLAFactory;
import com.dev.ServiceHelp.mappers.SLAMapper;
import com.dev.ServiceHelp.repository.SLARepository;
import jakarta.persistence.EntityNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.List;

class SLAServiceTest {

    @InjectMocks
    private SLAService slaService;

    @Mock
    private SLARepository slaRepository;

    @Mock
    private SLAMapper slaMapper;

    private List<SLA> slaList;
    private List<SLADTO> slaListDTO;
    private SLA sla;
    private SLADTO sladto;
    private Long existingSLaId;
    private Long nonExistingSLaId;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        SLAFactory.setSlaMapper(slaMapper);

        slaList = SLAFactory.createSlaEntityList();
        slaListDTO = SLAFactory.createSlaDTOList();
        sla = SLAFactory.createSLAEntity();
        sladto = SLAFactory.createSLADTO();
        existingSLaId = 1L;
        nonExistingSLaId = 90L;
    }

    @Test
    void addSLAConfigShouldReturnSLADTO() {
        when(slaMapper.toSLAEntity(sladto)).thenReturn(sla);
        when(slaRepository.save(ArgumentMatchers.any())).thenReturn(sla);
        when(slaMapper.toSLADTO(sla)).thenReturn(sladto);

        SLADTO result = slaService.addSLAConfig(sladto);

        assertNotNull(result);
        assertEquals(sladto, result, "The returned SLADTO should match the expected value");

        verify(slaMapper).toSLAEntity(sladto);
        verify(slaRepository).save(sla);
        verify(slaMapper).toSLADTO(sla);

    }

    @Test
    void getSlaConfigShouldReturnListSlaDTO() {
        when(slaRepository.findAll()).thenReturn(slaList);
        when(slaMapper.toSLADTO(sla)).thenReturn(sladto);

        List<SLADTO> result = slaService.getSlaConfig();

        assertNotNull(result);
        assertEquals(slaList.size(), result.size());

        verify(slaRepository, times(1)).findAll();
        verify(slaMapper, times(1)).toSLADTO(sla);

    }

    @Test
    void updateSlaConfigShouldReturnSlaDTO() {
        when(slaRepository.getReferenceById(existingSLaId)).thenReturn(sla);
        doNothing().when(slaMapper).updateSlaEntityFromDTO(sladto, sla);
        when(slaRepository.save(ArgumentMatchers.any())).thenReturn(sla);
        when(slaMapper.toSLADTO(sla)).thenReturn(sladto);

        SLADTO result = slaService.updateSlaConfig(existingSLaId, sladto);

        assertNotNull(result);
        assertEquals(existingSLaId, result.getId());

        verify(slaRepository, times(1)).getReferenceById(existingSLaId);
        verify(slaRepository, times(1)).save(sla);
        verify(slaMapper, times(1)).toSLADTO(sla);
    }

    @Test
    void updateSlaConfigShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {
        when(slaRepository.getReferenceById(nonExistingSLaId)).thenReturn(null);
        doThrow(EntityNotFoundException.class).when(slaRepository).getReferenceById(nonExistingSLaId);

        assertThrows(ResourceNotFoundException.class, () -> {
            slaService.updateSlaConfig(nonExistingSLaId, sladto);
        });
    }
}
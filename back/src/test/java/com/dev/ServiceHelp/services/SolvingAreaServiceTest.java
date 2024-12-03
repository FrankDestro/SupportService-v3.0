package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.SolvingAreaDTO;
import com.dev.ServiceHelp.entities.SolvingArea;
import com.dev.ServiceHelp.factory.SolvingAreaFactory;
import com.dev.ServiceHelp.mappers.SolvingAreaMapper;
import com.dev.ServiceHelp.repository.SolvingAreaRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;
import java.util.List;

class SolvingAreaServiceTest {

    @InjectMocks
    private SolvingAreaService solvingAreaService;

    @Mock
    private SolvingAreaRepository solvingAreaRepository;

    @Mock
    private SolvingAreaMapper solvingAreaMapper;

    private List<SolvingArea> solvingAreaList;
    private List<SolvingAreaDTO> solvingAreaListDTO;
    private SolvingArea solvingArea;
    private SolvingAreaDTO solvingAreaDTO;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        SolvingAreaFactory.setSolvingAreaMapper(solvingAreaMapper);

        solvingAreaList = SolvingAreaFactory.createSolvingAreaEntityList();
        solvingAreaListDTO = SolvingAreaFactory.createSolvingAreaDTOList();
        solvingArea = SolvingAreaFactory.createSolvingAreaEntity();
        solvingAreaDTO = SolvingAreaFactory.createSolvingAreaDTO();

    }

    @Test
    void getAllSolvingShouldReturnSolvingAreaListDTO() {
            when(solvingAreaRepository.findAll()).thenReturn(solvingAreaList);
            when(solvingAreaMapper.toSolvingAreaDTO(solvingArea)).thenReturn(solvingAreaDTO);

            List<SolvingAreaDTO> result = solvingAreaService.getAllSolving();

            assertNotNull(result);
    }
}
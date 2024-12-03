package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.SolvingAreaDTO;
import com.dev.ServiceHelp.entities.SolvingArea;
import com.dev.ServiceHelp.mappers.SolvingAreaMapper;
import com.dev.ServiceHelp.repository.SolvingAreaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class SolvingAreaService {

    private final SolvingAreaRepository solvingAreaRepository;
    private final SolvingAreaMapper solvingAreaMapper;

    @Transactional(readOnly = true)
    public List<SolvingAreaDTO> getAllSolving() {
        List<SolvingArea> solvingAreaList = solvingAreaRepository.findAll();
        return solvingAreaList.stream().map(sol -> solvingAreaMapper.toSolvingAreaDTO(sol)).toList();
    }
}

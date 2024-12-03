package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.SLADTO;
import com.dev.ServiceHelp.entities.SLA;
import com.dev.ServiceHelp.mappers.SLAMapper;
import com.dev.ServiceHelp.repository.SLARepository;
import com.dev.ServiceHelp.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class SLAService {

    private final SLARepository slaRepository;
    private final SLAMapper slaMapper;

    @Transactional(readOnly = true)
    public SLADTO addSLAConfig(SLADTO sladto) {
        SLA sla = slaMapper.toSLAEntity(sladto);
        sla = slaRepository.save(sla);
        return slaMapper.toSLADTO(sla);
    }

    @Transactional(readOnly = true)
    public List<SLADTO> getSlaConfig() {
        List<SLA> usersResult = slaRepository.findAll();
        return usersResult.stream().map(cat -> slaMapper.toSLADTO(cat)).toList();
    }

    @Transactional
    public SLADTO updateSlaConfig(Long id, SLADTO sladto) {
        try {
            SLA slaEntity = slaRepository.getReferenceById(id);
            slaMapper.updateSlaEntityFromDTO(sladto, slaEntity);
            slaEntity = slaRepository.save(slaEntity);
            return slaMapper.toSLADTO(slaEntity);
        }
        catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id not found " + id);
        }
    }
}

package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.KnowErrorDTO;
import com.dev.ServiceHelp.entities.KnowError;
import com.dev.ServiceHelp.mappers.KnowErrorMapper;
import com.dev.ServiceHelp.repository.KnowErrorRepository;
import com.dev.ServiceHelp.utils.ResourceUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
@Service
public class KnowErrorService {

    private final KnowErrorRepository knowErrorRepository;
    private final KnowErrorMapper knowErrorMapper;

    @Transactional
    public KnowErrorDTO getKnowErrorById(Long id) {
        KnowError knowError = ResourceUtil.getOrThrow(
                knowErrorRepository.findById(id),
                "knowError with ID " + id + " not found");
        return knowErrorMapper.toKnowErrorDTO(knowError);
    }

    @Transactional(readOnly = true)
    public Page<KnowErrorDTO> findKnowErrorsWithFilters(Long id, String titleText, String rootCauseText, String solution, String status, LocalDate initialDate, LocalDate finalDate,
                                                        LocalDate initialDateResolution,
                                                        LocalDate finalDateResolution,
                                                        Pageable pageable
    ) {
        Page<KnowError> knowErrorsList = knowErrorRepository.findKnowErrorsWithFilters(id,
                titleText, rootCauseText, solution, status, initialDate, finalDate, initialDateResolution, finalDateResolution, pageable);

        return knowErrorsList.map(knowErrorMapper::toKnowErrorDTO);
    }
}

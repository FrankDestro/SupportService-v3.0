package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.TypeRequestDTO;
import com.dev.ServiceHelp.entities.TypeRequest;
import com.dev.ServiceHelp.mappers.TypeRequestMapper;
import com.dev.ServiceHelp.repository.TypeRequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TypeRequestService {

    private final TypeRequestRepository typeRequestRepository;
    private final TypeRequestMapper typeRequestMapper;

    @Transactional(readOnly = true)
    public List<TypeRequestDTO> getAllTypeRequest() {
        List<TypeRequest> TypeRequestList = typeRequestRepository.findAll();
        return TypeRequestList.stream().map(typeRequest -> typeRequestMapper.toTypeRequestDTO(typeRequest)).toList();
    }
}

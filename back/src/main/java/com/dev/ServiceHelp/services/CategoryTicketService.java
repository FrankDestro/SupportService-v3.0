package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.CategoryTicketDTO;
import com.dev.ServiceHelp.entities.CategoryTicket;
import com.dev.ServiceHelp.mappers.CategoryTicketMapper;
import com.dev.ServiceHelp.repository.CategoryTicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CategoryTicketService {

    private final CategoryTicketRepository categoryTicketRepository;
    private final CategoryTicketMapper categoryTicketMapper;

    @Transactional(readOnly = true)
    public List<CategoryTicketDTO> getCategoryTicketAndSolvingArea() {
        List<CategoryTicket> categoryTicketsAndSolvingArea = categoryTicketRepository.findAllCategoryTicketsWithSolvingArea();
        return categoryTicketsAndSolvingArea.stream().map(cat ->
                categoryTicketMapper.toCategoryTicketDTO(cat)).toList();
    }
}

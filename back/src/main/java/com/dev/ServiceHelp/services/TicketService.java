package com.dev.ServiceHelp.services;

import com.dev.ServiceHelp.dto.DepartmentDTO;
import com.dev.ServiceHelp.dto.TicketDTO;
import com.dev.ServiceHelp.dto.UserDTO;
import com.dev.ServiceHelp.entities.Department;
import com.dev.ServiceHelp.entities.Ticket;
import com.dev.ServiceHelp.entities.User;
import com.dev.ServiceHelp.repository.TicketRepository;
import com.dev.ServiceHelp.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    @Transactional(readOnly = true)
    public TicketDTO findTicketById(Long id) {
        Ticket ticket = ticketRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("ticket not found"));
        return new TicketDTO(ticket);
    }
}

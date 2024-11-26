package com.dev.ServiceHelp.dto;

import com.dev.ServiceHelp.enums.StatusTicket;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TicketUpdateDTO {

    private StatusTicket statusTicket;
    private TypeRequestDTO typeRequest;
    private SLADTO sla;
    private SolvingAreaDTO solvingArea;
    private CategoryTicketDTO categoryTicket;
    private UserDTO technician;
    private UserDTO resolver;
}

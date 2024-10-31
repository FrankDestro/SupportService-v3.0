package com.dev.ServiceHelp.enums;

public enum NoteType {
    COMMENT,            // Comentário manual feito por um usuário (técnico ou solicitante)
    STATUS_CHANGE,      // Nota gerada ao mudar o status do chamado
    SYSTEM_GENERATED;   // Nota gerada automaticamente pelo sistema (por ex. quando um técnico é atribuído)
}

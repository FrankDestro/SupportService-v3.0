package com.dev.ServiceHelp.enums;

public enum StatusKnowError {
    OPEN,             // Erro ainda não analisado ou resolvido
    UNDER_ANALYSIS,   // Em análise para identificação da causa e solução
    DOCUMENTED,       // Documentado como erro conhecido, mas sem solução ainda
    SOLUTION_PENDING, // Solução identificada, mas ainda não implementada
    RESOLVED,         // Erro resolvido e documentado com solução
    ARCHIVED;         // Erro arquivado, não relevante ou obsoleto
}

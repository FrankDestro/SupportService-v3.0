package com.dev.ServiceHelp.factory;

import com.dev.ServiceHelp.dto.SLADTO;
import com.dev.ServiceHelp.entities.SLA;
import com.dev.ServiceHelp.mappers.SLAMapper;
import lombok.Setter;

import java.util.Collections;
import java.util.List;

public class SLAFactory {

    @Setter
    private static SLAMapper slaMapper;

    public static SLA createSLAEntity() {
        return new SLA(1L, "Critica", 2);
    }

    public static SLADTO createSLADTO() {
        return new SLADTO(1L, "Critica", 2);
    }

    public static List<SLA> createSlaEntityList() {
        return createSingletonList(createSLAEntity());
    }

    public static List<SLADTO> createSlaDTOList() {
        return createSingletonList(createSLADTO());
    }

    private static <T> List<T> createSingletonList(T object) {
        return Collections.singletonList(object);
    }
}

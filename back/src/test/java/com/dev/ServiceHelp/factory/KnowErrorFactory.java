package com.dev.ServiceHelp.factory;

import com.dev.ServiceHelp.dto.KnowErrorDTO;
import com.dev.ServiceHelp.entities.KnowError;
import com.dev.ServiceHelp.enums.StatusKnowError;
import com.dev.ServiceHelp.mappers.KnowErrorMapper;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

public class KnowErrorFactory {

    @Setter
    private static KnowErrorMapper knowErrorMapper;

    public static KnowError createKnowErrorEntity() {
        List<String> tags = new ArrayList<>();
        tags.add("api");
        tags.add("login");
        KnowError knowError = new KnowError(1L,"bloqueio","sistema","desbloqueio", tags,
                StatusKnowError.DOCUMENTED,
                null,null, null, null, null );
        return knowError;
    }

    public static KnowErrorDTO createKnowErrorDTO() {
        KnowError knowError = createKnowErrorEntity();
        KnowErrorDTO knowErrorDTO = new KnowErrorDTO();
        knowErrorDTO.setId(knowError.getId());
        knowErrorDTO.setTitle(knowError.getTitle());
        knowErrorDTO.setRootCause(knowError.getRootCause());
        knowErrorDTO.setSolution(knowError.getSolution());
        knowErrorDTO.setTags(knowError.getTags());
        knowErrorDTO.setStatus(knowError.getStatus());
        knowErrorDTO.setCreateDate(knowError.getCreateDate());
        knowErrorDTO.setResolutionDate(knowError.getResolutionDate());
        knowErrorDTO.setUserID(1L);
        knowErrorDTO.setUserEmail("joao@gmail.com");
        knowErrorDTO.setAttachments(null);
        return knowErrorDTO;
    }

}

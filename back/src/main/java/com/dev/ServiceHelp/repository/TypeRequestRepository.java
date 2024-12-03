package com.dev.ServiceHelp.repository;

import com.dev.ServiceHelp.entities.TypeRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeRequestRepository extends JpaRepository<TypeRequest, Long> {


}

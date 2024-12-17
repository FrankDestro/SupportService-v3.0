package com.dev.ServiceHelp.repository;

import com.dev.ServiceHelp.entities.KnowError;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface KnowErrorRepository extends JpaRepository<KnowError, Long> {

    @Query(nativeQuery = true, value = """
        SELECT *
        FROM know_Error
        WHERE 1=1
        AND (:id IS NULL OR id = :id)
        AND (:titleText IS NULL OR title LIKE '%' || :titleText || '%')
        AND (:rootCauseText IS NULL OR root_cause LIKE '%' || :rootCauseText || '%')
        AND (:solution IS NULL OR solution LIKE '%' || :solution || '%')
        AND (COALESCE(ARRAY[]::TEXT[], ARRAY[]::TEXT[]) = ARRAY[]::TEXT[] OR tags && ARRAY[]::TEXT[])
        AND (:status IS NULL OR :status = '' OR status = :status)
        AND (:initialDate IS NULL
             OR :finalDate IS NULL
             OR create_date BETWEEN :initialDate AND :finalDate
             )
             AND (
             :initialDateResolution IS NULL
             OR :finalDateResolution IS NULL
             OR resolution_date BETWEEN :initialDateResolution AND :finalDateResolution
             )
             ORDER BY create_date DESC;
    """)
    Page<KnowError> findKnowErrorsWithFilters(
            @Param("id") Long id,
            @Param("titleText") String titleText,
            @Param("rootCauseText") String rootCauseText,
            @Param("solution") String solution,
            @Param("status") String status,
            @Param("initialDate") LocalDate initialDate,
            @Param("finalDate") LocalDate finalDate,
            @Param("initialDateResolution") LocalDate initialDateResolution,
            @Param("finalDateResolution") LocalDate finalDateResolution,
            Pageable pageable
    );
}

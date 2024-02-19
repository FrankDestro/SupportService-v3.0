package com.dev.ServiceHelp.repository;
import java.util.List;
import java.util.Optional;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.dev.ServiceHelp.entities.User;
import com.dev.ServiceHelp.projections.UserDetailsProjection;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {

User findByEmail(String email);
	
	@Query(nativeQuery = true, value = """
			SELECT tb_user.email AS username, tb_user.password, role.id As roleId, role.authority, tb_user.status_user As status
			FROM tb_user
			INNER JOIN tb_user_role ON tb_user.id = tb_user_role.user_id
			INNER JOIN role ON role.id = tb_user_role.role_id
			WHERE tb_user.email = :email
			""")
	List<UserDetailsProjection> searchUserAndRoleByEmail(String email);

	@EntityGraph(attributePaths = {"createdByUser"})
	Optional<User> findById(Long id);

	@Query("SELECT obj FROM User obj " +
			"WHERE UPPER(obj.firstName) LIKE UPPER(CONCAT('%', :name, '%')) OR " +
			"UPPER(obj.lastName) LIKE UPPER(CONCAT('%', :name, '%'))")
	Page<User> searchByName(String name, Pageable pageable);
}

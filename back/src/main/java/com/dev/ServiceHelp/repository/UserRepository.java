package com.dev.ServiceHelp.repository;
import java.util.List;
import java.util.Optional;


import com.dev.ServiceHelp.enums.StatusUser;
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

	@EntityGraph(attributePaths = {"department", "roles"})
	@Query("SELECT obj FROM User obj " +
			"WHERE (:name IS NULL OR UPPER(CONCAT(obj.firstName, ' ', obj.lastName)) LIKE UPPER(CONCAT('%', :name, '%'))) " +
			"AND (:id IS NULL OR obj.id = :id)" +
			"AND (:status IS NULL OR obj.statusUser = :status)"
	)
	Page<User> searchByName(Long id, String name, StatusUser status, Pageable pageable);


}

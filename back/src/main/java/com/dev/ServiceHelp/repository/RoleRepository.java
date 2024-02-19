package com.dev.ServiceHelp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.ServiceHelp.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
	
	Role findByAuthority(String authority);

}

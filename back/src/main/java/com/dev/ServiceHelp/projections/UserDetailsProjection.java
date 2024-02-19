package com.dev.ServiceHelp.projections;

public interface UserDetailsProjection {

	String getUsername();
	String getPassword();
	Long getRoleId();
	String getAuthority();
	Integer getStatus();

}

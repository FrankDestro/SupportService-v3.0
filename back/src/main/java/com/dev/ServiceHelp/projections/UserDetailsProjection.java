package com.dev.ServiceHelp.projections;

public interface UserDetailsProjection {

	Integer getId();
	String getName();
	String getLast();
	String getUsername();
	String getPassword();
	Long getRoleId();
	String getAuthority();
	Integer getStatus();

}

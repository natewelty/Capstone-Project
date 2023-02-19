package com.cogent.entity;

import java.util.Collection;

import org.springframework.security.core.userdetails.User;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;

@Entity
public class CustomUser extends User{   //User class itself from security.core doesn't have an ID for persistence.
										// This can be done without the boolean values, but they cost basically nothing and 
										//might be helpful somewhere.
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String username;
	String password;
	boolean enabled;
	boolean accountNonExpired;
	boolean credentialsNonExpired;
	boolean accountNonLocked;
	@ManyToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name = "id")
	Collection<SimpleGrantedAuthority> authorities; //Same thing as User, GrantedAuthority plus a persistence ID
	public CustomUser(String username, String password, Collection<SimpleGrantedAuthority> authorities) {
		super(username, password, authorities);
		
	}
	
	
}
 
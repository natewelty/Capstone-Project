package com.cogent.entity;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.userdetails.User;

import com.cogent.requests.UserRequest;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class CustomUser{   //User class itself from security.core doesn't have an ID for persistence.
										// This can be done without the boolean values, but they cost basically nothing and 
										//might be helpful somewhere.
	/**
	 * 
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String username;
	private String password;
	private String name;
	private String email;
	
	//@OneToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
	//@JoinColumn(name = "id")
	SimpleGrantedAuthority authorities; //Same thing as User, GrantedAuthority plus a persistence ID
	
	public CustomUser(String username, String password, SimpleGrantedAuthority authorities) {
		super();
		this.username = username;
		this.password = password;
		this.authorities=authorities;
		
		
		
		
	}
	public CustomUser(String username, String password,String name,String email, SimpleGrantedAuthority authorities) {
		this(username, password, authorities);
		this.name=name;
		this.email=email;
		
	}
	public CustomUser(UserRequest user) {
		this(user.getName(),user.getPassword(),user.getAuthorities());
		this.name=user.getName();
		this.email=user.getEmail();
		
	}
	
	
}
 
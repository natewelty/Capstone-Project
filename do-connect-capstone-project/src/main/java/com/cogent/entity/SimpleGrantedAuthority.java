 package com.cogent.entity;


import org.springframework.security.core.GrantedAuthority;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@NoArgsConstructor
public class SimpleGrantedAuthority implements GrantedAuthority{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String authority;
	
	@Override
	public String getAuthority() {
		// TODO Auto-generated method stub
		return authority;
	}
	public SimpleGrantedAuthority(String role) {
		this.authority=role;
	}
	
	@Override
	public boolean equals(Object other) {
		SimpleGrantedAuthority otherSGA=(SimpleGrantedAuthority) other;
		if(this.getAuthority().equals(otherSGA.getAuthority())) {
			return true;
		}
		return false;
	}
	@Override
	public int hashCode() {
		int result = 17;
		result = 31*result+id;
		result = 31*result+authority.hashCode();
		return result;
	}

}
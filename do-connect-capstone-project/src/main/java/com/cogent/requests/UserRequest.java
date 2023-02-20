package com.cogent.requests;

import java.util.Collection;

import com.cogent.entity.SimpleGrantedAuthority;

public class UserRequest {
	private int id;
	private String username;
	private String password;
	private String name;
	private String email;
	Collection<SimpleGrantedAuthority> authorities;
}

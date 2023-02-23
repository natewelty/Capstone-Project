package com.cogent.requests;

import java.util.ArrayList;
import com.cogent.entity.SimpleGrantedAuthority;

import lombok.Data;
@Data
public class UserRequest {
	private int id;
	private String username;
	private String password;
	private String name;
	private String email;
	SimpleGrantedAuthority authorities;
}

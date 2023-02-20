package com.cogent.requests;
import lombok.Data;

@Data
public class UserCreateRequest {
	String username;
	String password;
	String role;
	String name;
	String email;
}

package com.cogent.entity;
import lombok.Data;

@Data
public class UserCreateRequest {
	String username;
	String password;
	String role;
}

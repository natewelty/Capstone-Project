package com.cogent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cogent.entity.User;
import com.cogent.entity.UserCreateRequest;
import com.cogent.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
	@Autowired
	UserService userService;
	@PostMapping
	public ResponseEntity createUser(@RequestBody UserCreateRequest userCreateRequest) {
		userService.createUser(userCreateRequest);
		return ResponseEntity.ok().build();
	}
	@GetMapping
	public List<User> listUsers(){
		return userService.readAll();
	}
	
	
}

package com.cogent.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cogent.config.AuthenticationConfigConstants;
import com.cogent.entity.UserCreateRequest;
import com.cogent.service.UserService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
	@Autowired
	UserService userService;
	@PostMapping(AuthenticationConfigConstants.SIGN_UP_URL)
    public String createUser(@RequestBody UserCreateRequest user) {
    	
    	userService.createUser(user);
    	
    	return "User created.";
    }
	
	@PostMapping("/login") //To login, submit a post-request to this point, not a get request.
	public String login() {
		return "This is a test login page.";
	}
	
	@GetMapping("/hello")
	public String hello() {
		return "this is hello";
	}
}

package com.cogent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cogent.config.AuthenticationConfigConstants;
import com.cogent.entity.CustomUser;
import com.cogent.requests.UserCreateRequest;
import com.cogent.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
	@Autowired
	UserService userService;

	@GetMapping("/")
	public String home() {
		return "this is home";
	}

	@PostMapping(AuthenticationConfigConstants.SIGN_UP_URL)
	public String createUser(@RequestBody UserCreateRequest user) {

		userService.createUser(user);

		return "User created.";
	}

	@PostMapping("/login")
	public String login() {
		return "This is a test login page.";
	}
	
	@GetMapping("/getallusers")
	public List<CustomUser> getAllUsers(){
		return userService.readAll();
	}
	
	@GetMapping("/getuserbyid")
	public CustomUser getUserById(@RequestBody int id) {
		return userService.read(id);
	}
	
	@PutMapping("/updateuser")
	public void updateUser(@RequestBody CustomUser user) {
		userService.save(user);
	}
	
	@GetMapping("/getuserbyname")
	public CustomUser getUserByName(@RequestBody String name) {
		return userService.readUserByName(user.getName());
	}
	
	@GetMapping("/getuserbyrole")
	public List<CustomUser> getUsersByRole(String role){
		return userService.readUsersByRole(role);
	}
	

}

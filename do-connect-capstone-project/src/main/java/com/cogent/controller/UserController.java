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
import com.cogent.entity.SimpleGrantedAuthority;
import com.cogent.requests.UserCreateRequest;
import com.cogent.requests.UserRequest;
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
		List<CustomUser> list = userService.readAll();
		list.stream().forEach(s->s.setPassword(null));
		return list;
	}
	
	@GetMapping("/getuserbyid")
	public CustomUser getUserById(@RequestBody UserRequest user) {
		CustomUser custUser = userService.read(user.getId());
		custUser.setPassword(null);
		return custUser;
	}
	
	@PutMapping("/updateuser")
	public void updateUser(@RequestBody UserRequest user) {
		CustomUser custUser= new CustomUser(user);
		userService.save(custUser);
	}
	
	@GetMapping("/getuserbyname")
	public CustomUser getUserByName(@RequestBody UserRequest user) {
		CustomUser custUser = userService.readUserByName(user.getName());
		custUser.setPassword(null);
		return custUser;
	}
	
	@GetMapping("/getuserbyrole")
	public List<CustomUser> getUsersByRole(@RequestBody UserRequest user){
		SimpleGrantedAuthority sga =(SimpleGrantedAuthority) user.getAuthorities().toArray()[0];
		List<CustomUser> list = userService.readUsersByRole(sga.getAuthority().toString());
		list.stream().forEach(s->s.setPassword(null));
		return list;
	}
	

}

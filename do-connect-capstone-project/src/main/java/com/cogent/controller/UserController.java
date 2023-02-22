package com.cogent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

	@GetMapping("/user")
	public String home() {
		return "this is home";
	}

	@PostMapping(AuthenticationConfigConstants.SIGN_UP_URL)
	public String createUser(@RequestBody UserCreateRequest user) {

		userService.createUser(user);

		return "User created.";
	}

	@PostMapping("/user/login")
	public String login() {
		return "This is a test login page.";
	}
	
	@GetMapping("/user/read/all")
	public List<CustomUser> getAllUsers(){
		List<CustomUser> list = userService.readAll();
		list.stream().forEach(s->s.setPassword(null));
		return list;
	}
	
	@GetMapping("/user/read/id/{id}")
	public CustomUser getUserById(@PathVariable("id") int id) {
		CustomUser custUser = userService.read(id);
		custUser.setPassword(null);
		return custUser;
	}
	
	@PutMapping("/update")
	public void updateUser(@RequestBody UserRequest user) {
		CustomUser custUser= new CustomUser(user);
		userService.save(custUser);
	}
	
	@GetMapping("/user/read/name/{name}")
	public CustomUser getUserByName(@PathVariable("name") String name) {
		CustomUser custUser = userService.readUserByName(name);
		custUser.setPassword(null);
		return custUser;
	}
	
	@GetMapping("/user/read/role/{role}")
	public List<CustomUser> getUsersByRole(@PathVariable("role") String role){
		SimpleGrantedAuthority sga = new SimpleGrantedAuthority(role);
		List<CustomUser> list = userService.readUsersByRole(sga.getAuthority().toString());
		list.stream().forEach(s->s.setPassword(null));
		return list;
	}
	

}

package com.cogent.service;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.cogent.entity.CustomUser;
import com.cogent.entity.SimpleGrantedAuthority;
import com.cogent.repository.UserRepository;
import com.cogent.requests.UserCreateRequest;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
	@Autowired
	private final UserRepository userRepository;
	@Autowired
	private final BCryptPasswordEncoder passwordEncoder;
	
	public CustomUser readUserByUsername(String username) {
		return userRepository.findByUsername(username).orElseThrow(EntityNotFoundException::new);
	}
	public CustomUser readUserByName(String name) {
		return userRepository.findByName(name).orElseThrow(EntityNotFoundException::new);
	}
	
	public void createUser(UserCreateRequest userCreateRequest) {
		SimpleGrantedAuthority role = new SimpleGrantedAuthority(userCreateRequest.getRole());
		
		CustomUser user = new CustomUser(userCreateRequest.getUsername(),
					passwordEncoder.encode(userCreateRequest.getPassword()),
					userCreateRequest.getName(),userCreateRequest.getEmail(), role);
		Optional<CustomUser> byUsername = userRepository.findByUsername(userCreateRequest.getUsername());
		if(byUsername.isPresent()) {
			throw new RuntimeException("User is already registered.");
		}
		userRepository.save(user);
	}
	
	public List<CustomUser> readAll(){
		return userRepository.findAll();
	}
	
	public CustomUser read(int id) {
		return userRepository.findById(id).orElseThrow();
	}
	
	public void save(CustomUser user) {
		userRepository.save(user);
	}
	
	public List<CustomUser> readUsersByRole(String role){
		return userRepository.findAll().stream().filter(u->u.getAuthorities().equals(new SimpleGrantedAuthority(role))).toList();
	}
}

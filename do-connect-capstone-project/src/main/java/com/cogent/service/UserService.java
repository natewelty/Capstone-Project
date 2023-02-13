package com.cogent.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.cogent.entity.User;
import com.cogent.entity.UserCreateRequest;
import com.cogent.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
	@Autowired
	private final UserRepository userRepository;
	@Autowired
	private final BCryptPasswordEncoder passwordEncoder;
	
	public User readUserByUsername(String username) {
		return userRepository.findByUserName(username).orElseThrow(EntityNotFoundException::new);
	}
	
	public void createUser(UserCreateRequest userCreateRequest) {
		User user = new User();
		Optional<User> byUsername = userRepository.findByUserName(userCreateRequest.getUserName());
		if(byUsername.isPresent()) {
			throw new RuntimeException("User is already registered.");
		}
		user.setUserName(userCreateRequest.getUserName());
		user.setPassword(passwordEncoder.encode(userCreateRequest.getPassword()));
		userRepository.save(user);
	}
	
}

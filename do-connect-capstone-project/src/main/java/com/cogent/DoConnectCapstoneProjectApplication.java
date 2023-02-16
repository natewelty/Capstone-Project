package com.cogent;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cogent.entity.User;
import com.cogent.repository.UserRepository;

import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class DoConnectCapstoneProjectApplication {
	@Autowired
    private UserRepository repository;

    @PostConstruct
    public void initUsers() {
       
        repository.save(new User(0,"admin","admin"));
    }

	public static void main(String[] args) {
		SpringApplication.run(DoConnectCapstoneProjectApplication.class, args);
	}

}

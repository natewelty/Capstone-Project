package com.cogent;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cogent.service.FileService;

import jakarta.annotation.Resource;

@SpringBootApplication
public class DoConnectCapstoneProjectApplication implements CommandLineRunner{
	@Resource
	FileService storageService;
	public static void main(String[] args) {
		SpringApplication.run(DoConnectCapstoneProjectApplication.class, args);
	}
	@Override
	  public void run(String... arg) throws Exception {
//	    storageService.deleteAll();
	    storageService.init();
	  }

}

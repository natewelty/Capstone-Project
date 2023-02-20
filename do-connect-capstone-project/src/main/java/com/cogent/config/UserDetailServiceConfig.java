package com.cogent.config;

import javax.sql.DataSource;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.JdbcUserDetailsManager;

import com.cogent.entity.CustomUser;

//@Configuration
//public class UserDetailServiceConfig {
//	@Bean
//	@Primary
//	public UserDetailsService userDetailsService(BCryptPasswordEncoder bCryptPasswordEncoder, DataSource dataSource) {
//		JdbcUserDetailsManager manager = new JdbcUserDetailsManager(dataSource);
//	    manager.createUser(CustomUser.withUsername("user")
//	      .password(bCryptPasswordEncoder.encode("userPass"))
//	      .roles("USER")
//	      .build());
//	    manager.createUser(CustomUser.withUsername("admin")
//	      .password(bCryptPasswordEncoder.encode("adminPass"))
//	      .roles("USER", "ADMIN")
//	      .build());
//	    return manager;
//	}
//	
//	
//	
//	
	
//	@Bean
//	public DataSource dataSource() {
//	    return DataSourceBuilder
//	        .create()
//	        .username("sa")
//	        .password("password")
//	        .url("jdbc:h2:mem:dcbapp")
//	        .driverClassName("org.h2.Driver")
//	        .build();
//	}
//}
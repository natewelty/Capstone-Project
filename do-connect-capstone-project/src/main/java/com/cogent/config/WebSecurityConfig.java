package com.cogent.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import com.cogent.filter.JWTAuthenticationFilter;
import com.cogent.filter.JWTAuthorizationFilter;
import com.cogent.service.AuthenticationUserDetailService;

import org.springframework.security.authentication.AuthenticationManager;


@EnableWebSecurity
@Configuration
@EnableMethodSecurity(prePostEnabled = true, securedEnabled = true, jsr250Enabled = true)
public class WebSecurityConfig{
	@Value("${spring.security.debug:false}")
    boolean securityDebug;
	
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http, AuthenticationManager auth, AuthenticationUserDetailService userDetailService) throws Exception {
		    http.csrf()
		      .disable()
		      .cors()
		      .and()
		      .authorizeHttpRequests()
		      .requestMatchers("/css/**", "/js/**", "/img/**", "/lib/**", "/favicon.ico","/file/read/**")
		      .permitAll()
		      .requestMatchers(HttpMethod.POST, AuthenticationConfigConstants.SIGN_UP_URL)
		      .permitAll()
		      .requestMatchers("/user/login/**")
		      .anonymous()
		      .requestMatchers(HttpMethod.DELETE)
		      .hasRole("ADMIN")
		      .anyRequest()
		      .authenticated()
		      .and()
		      .addFilter(new JWTAuthenticationFilter(auth, userDetailService))
		      .addFilter(new JWTAuthorizationFilter(auth))
		      .sessionManagement()
		      .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
			
//			http.csrf().disable().cors().and().authorizeHttpRequests().anyRequest().permitAll()
//			.and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	    return http.build();
	}
	@Bean
	public AuthenticationManager authenticationManager(HttpSecurity http, BCryptPasswordEncoder bCryptPasswordEncoder, UserDetailsService userDetailService) 
	  throws Exception {
	    return http.getSharedObject(AuthenticationManagerBuilder.class)
	      .userDetailsService(userDetailService)
	      .passwordEncoder(bCryptPasswordEncoder)
	      .and()
	      .build();
	}
	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
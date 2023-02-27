package com.cogent.filter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.cogent.config.AuthenticationConfigConstants;
import com.cogent.requests.UserAuthenticationRequest;
import com.cogent.service.AuthenticationUserDetailService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter{
	private AuthenticationManager authenticationManager;
	private AuthenticationUserDetailService userDetailsService;
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            UserAuthenticationRequest creds = new ObjectMapper()
                .readValue(request.getInputStream(), UserAuthenticationRequest.class);
            UserDetails user = userDetailsService.loadUserByUsername(creds.getUsername());
            return authenticationManager.authenticate(
            		new UsernamePasswordAuthenticationToken(creds.getUsername(),creds.getPassword(),user.getAuthorities())
            );
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
	

    @Override protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication auth) throws IOException, ServletException {
    	String token = JWT.create()
                .withSubject(((User) auth.getPrincipal()).getUsername())
                .withClaim("role", auth.getAuthorities().iterator().next().getAuthority())
                .withExpiresAt(new Date(System.currentTimeMillis() + AuthenticationConfigConstants.EXPIRATION_TIME))
                .sign(Algorithm.HMAC512(AuthenticationConfigConstants.SECRET.getBytes()));
        response.addHeader(AuthenticationConfigConstants.HEADER_STRING, AuthenticationConfigConstants.TOKEN_PREFIX + token);
        response.setStatus(HttpServletResponse.SC_OK);
        response.setContentType("application/json");
        response.getWriter().write("{\"token\":\""+token+"\"}");
        response.getWriter().flush();
    }

	public JWTAuthenticationFilter(AuthenticationManager authenticationManager,AuthenticationUserDetailService userDetailsService) {
		super();
		this.setFilterProcessesUrl("/user/login");
		this.authenticationManager = authenticationManager;
		this.userDetailsService=userDetailsService;
	}
    
}

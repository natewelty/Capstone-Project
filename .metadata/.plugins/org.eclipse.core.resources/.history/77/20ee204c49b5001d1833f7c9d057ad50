package com.cogent.entity;

import java.time.OffsetDateTime;

import com.cogent.requests.ChatRequest;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Chat{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String from_user;
	private String to_user;
	private String message;
	private OffsetDateTime datetime;
	
	public Chat(ChatRequest chatRequest) {
		
		this.from_user = chatRequest.getFrom_user();
		this.to_user = chatRequest.getTo_user();
		this.message = chatRequest.getMessage();
		this.datetime = OffsetDateTime.now();
	}
	
	
}

package com.cogent.requests;


import lombok.Data;


@Data

public class ChatRequest {
	private int from_user;
	private int to_user;
	private String message;
	
}

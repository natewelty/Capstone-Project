package com.cogent.requests;

import java.time.OffsetDateTime;

import lombok.Data;


@Data

public class ChatRequest {
	private String from_user;
	private String to_user;
	private String message;
	private OffsetDateTime datetime;
	
}

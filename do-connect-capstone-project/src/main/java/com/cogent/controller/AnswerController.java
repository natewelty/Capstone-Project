package com.cogent.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.cogent.service.AnswerService;
@RestController
public class AnswerController {
	@Autowired
	AnswerService answerService;
	
	
}

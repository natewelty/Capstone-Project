package com.cogent.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cogent.entity.Answer;
import com.cogent.requests.AnswerRequest;
import com.cogent.service.AnswerService;

@RestController()
public class AnswerController {
	@Autowired
	AnswerService answerService;
	

	@PostMapping("/answers")
	public String writeAnswer(@RequestBody AnswerRequest ans) {
		answerService.createAnswer(ans);
		return "Answer added";
	}

	@GetMapping("/getallanswers")
	public List<Answer> getAllAnswer() {
		List<Answer> list = answerService.readAll();
		return list;

	}

	@GetMapping("/getanswerbyid/{id}")
	public Answer getAnswerById(@PathVariable("id") int id) {
		Answer answer = answerService.readById(id);
		return answer;

	}

	@PutMapping("/updateanswer")
	public Answer updateAnswer(@RequestBody Answer ans) {
		return answerService.update(ans);
	}

	@GetMapping("/getunapprovedanswer")
	public List<Answer> getUnapprovedAnswer() {
		List<Answer> list = answerService.findbyStatus();
		return list;
	}

	@DeleteMapping("/deleteanswer/{id}")
	public String deleteById(@PathVariable("id") Integer id) {

		return answerService.delete(id);

	}

	@GetMapping("/getbyquestionid/{id}")
	public List<Answer> findbyQid(@PathVariable("id") Integer id) {
		List<Answer> list = answerService.findAnswerByQuestionId(id);
		return list;

	}

}

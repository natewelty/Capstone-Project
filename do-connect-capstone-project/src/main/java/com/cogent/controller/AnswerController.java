package com.cogent.controller;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AnswerController {
	@Autowired
	AnswerService answerService;
	

	@PostMapping("/answer/create")
	public Answer writeAnswer(@RequestBody AnswerRequest ans) {
		
		return answerService.createAnswer(ans);
	}

	@GetMapping("/answer/read/all")
	public List<Answer> getAllAnswer() {
		List<Answer> list = answerService.readAll();
		return list;

	}

	@GetMapping("/answer/read/id/{id}")
	public Answer getAnswerById(@PathVariable("id") int id) {
		Answer answer = answerService.readById(id);
		return answer;

	}

	@PutMapping("/answer/update")
	public Answer updateAnswer(@RequestBody Answer ans) {
		return answerService.update(ans);
	}

	@GetMapping("/answer/read/unapproved")
	public List<Answer> getUnapprovedAnswer() {
		List<Answer> list = answerService.findbyStatus();
		return list;
	}

	@DeleteMapping("/answer/delete/{id}")
	public void deleteById(@PathVariable("id") Integer id) {
		System.out.println(answerService.delete(id));

	}

	@GetMapping("/answer/read/qid/{id}")
	public List<Answer> findbyQid(@PathVariable("id") Integer id) {
		List<Answer> list = answerService.findAnswerByQuestionId(id);
		return list;
	}

}

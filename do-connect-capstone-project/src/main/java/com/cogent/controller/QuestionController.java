
package com.cogent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cogent.entity.Question;
import com.cogent.requests.QuestionRequest;
import com.cogent.service.QuestionService;
@RestController("/question")
public class QuestionController {
	@Autowired
	QuestionService questionService;
	
	@PostMapping("/create")
	public String addQuestion(@RequestBody QuestionRequest questionRequest ) {
		questionService.createQuestion(new Question(questionRequest));
		return "Question asked";
		
	}
	@GetMapping("/read/all")
	public List<Question> getAllQuestion(){
		List<Question> list = questionService.getAll();
		return list;
		
	}
	@GetMapping("/read/id/{id}")
	public Question getQuestionById(@PathVariable("id") Integer id) {
		Question quiz = questionService.getById(id);
		return quiz;
	}
	@PutMapping("/update")
	public Question updateQuestion(@RequestBody Question question){
		return questionService.update(question);
	}
	@DeleteMapping("/delete/{id}")
	public String deleteById(@PathVariable("id") int id){
		
		return questionService.deleteById(id);
		
	}
	@GetMapping("/read/unapproved")
	public List<Question>getFalseQuestion(){
		List<Question>list = questionService.getAllQuestionFalse();
		return list;
		
	}
	@GetMapping("/read/topic/{topic}")
	public List<Question>findByTopic(@PathVariable("topic")String topic){
		List<Question>list = questionService.getAllQuestionByTopic(topic);
		return list;
	}
	
	
}

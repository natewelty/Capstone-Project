
package com.cogent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cogent.entity.Question;
import com.cogent.service.QuestionService;
@RestController
public class QuestionController {
	@Autowired
	QuestionService questionService;
	
	@PostMapping("/addquestions")
	public String addQuestion(@RequestBody Question question ) {
		questionService.createQuestion();
		return "Question asked";
		
	}
	@GetMapping("/getallquestion")
	public List<Question> getAllQuestion(@RequestBody Question question){
		List<Question> list = questionService.getAll();
		return list;
		
	}
	@GetMapping("/getquestionbyid{id}")
	public Question getQuestionById(@PathVariable("id") Integer id) {
		Question quiz = questionService.getById(id);
		return quiz;
	}
	@PutMapping("/updatequestion")
	public Question updateQuestion(@RequestBody Question question){
		return questionService.update(question);
	}
	public String deletById(@PathVariable("id") Integer id){
		Question quiz = questionService.deletById(id);
		return "Question deleted Successfully";
		
	}
	@GetMapping("/getquestionFalse")
	
	public List<Question>getFalseQuestion(){
		List<Question>list = questionService.getAllQuestionFalse();
		return list;
		
	}
	@GetMapping("/getQuestionbytopic")
	public List<Question>findByTopic(@PathVariable("topic")String topic){
		List<Question>list = questionService.getAllQuestionByTopic(topic);
		return list;
	}
	
	
}

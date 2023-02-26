package com.cogent.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cogent.entity.Answer;
import com.cogent.entity.Question;
import com.cogent.repository.QuestionRepository;

@Service
public class QuestionService {
	@Autowired
	private QuestionRepository questionRepo;
	
	
	public int createQuestion(Question question) {
		Question questionResult =questionRepo.save(question);
		return questionResult.getId();
	}
	public List<Question> getAll(){
		return questionRepo.findAll();
	}
	public Question getById(int id) {
		return questionRepo.findById(id).orElseThrow();
	}
	public Question update(Question question) {
		Question questionBefore = questionRepo.findById(question.getId()).get();
		question.setAnswers(questionBefore.getAnswers());
		return questionRepo.save(question);
	}
	
	public String deleteById(int id) {
		questionRepo.deleteById(id);
		return "question deleted";
	}
	public List<Question> getAllQuestionFalse() {
		return questionRepo.findByStatus(false);
		
	}
	
	public List<Question> getAllQuestionByTopic(String topic) {
		List<Question>list = questionRepo.findAll();
		return list.stream().filter(s->s.getTopic().compareToIgnoreCase(topic)==0).toList();
	}
	

	
}




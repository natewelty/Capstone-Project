package com.cogent.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cogent.entity.Answer;
import com.cogent.repository.AnswerRepository;
import com.cogent.requests.AnswerRequest;

@Service
public class AnswerService {
	@Autowired
	private AnswerRepository answerRepo;
	@Autowired
	private QuestionService questionService;

	public Answer createAnswer(AnswerRequest ansRequest) {
		ansRequest.setQuestion(questionService.getById(ansRequest.questionId));
		Answer answer = new Answer(ansRequest);
		questionService.getById(ansRequest.questionId).addAnswer(answer);
		return answerRepo.save(answer);

	}

	public List<Answer> readAll() {
		return answerRepo.findAll();
	}

	public Answer readById(int id) {
		return answerRepo.findById(id).orElseThrow();
	}

	public Answer update(Answer ans) {
		return answerRepo.save(ans);
	}

	public List<Answer> findbyStatus() {
		return answerRepo.findByStatus(false);
	}

	public String delete(int id) {
		answerRepo.deleteById(id);
		return "Answer Deleted";
	}

	public List<Answer> findAnswerByQuestionId(int id) {
		List<Answer> list = answerRepo.findAll();
		return list.stream().filter(s -> s.getQuestion().getId() == id).toList();
	}

}

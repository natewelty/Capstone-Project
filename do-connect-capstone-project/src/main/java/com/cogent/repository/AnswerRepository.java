package com.cogent.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cogent.entity.Answer;


public interface AnswerRepository extends JpaRepository<Answer,Integer>{
	public List<Answer> findByStatus(boolean status);
}

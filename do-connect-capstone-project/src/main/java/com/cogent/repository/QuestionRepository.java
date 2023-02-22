package com.cogent.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cogent.entity.Answer;
import com.cogent.entity.Question;

public interface QuestionRepository extends JpaRepository<Question,Integer>{
	public List<Question>findByStatus(boolean status);

}
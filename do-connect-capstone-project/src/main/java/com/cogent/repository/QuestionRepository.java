package com.cogent.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cogent.entity.Question;

public interface QuestionRepository extends JpaRepository<Question,Integer>{

}

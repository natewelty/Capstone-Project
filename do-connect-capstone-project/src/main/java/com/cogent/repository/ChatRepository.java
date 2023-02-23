package com.cogent.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cogent.entity.Chat;

public interface ChatRepository extends JpaRepository<Chat,Integer>{
	
}

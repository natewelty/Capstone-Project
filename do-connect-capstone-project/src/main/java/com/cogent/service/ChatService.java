package com.cogent.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cogent.entity.Chat;
import com.cogent.repository.ChatRepository;


@Service
public class ChatService {
	@Autowired
	ChatRepository cR;
	public void saveMsg(Chat chat) {
		cR.save(chat);
	}
	
	public void deleteUseId(int id) {
		cR.deleteById(id);
	}
	
	public List<Chat> showAll() {
		return (List<Chat>) cR.findAll();
	}
	
	
	  public Optional<Chat> get(int id){
		  return cR.findById(id);
	  }
	  
	  public List<Chat> findChat(String name1, String name2){
		  List<Chat> temp = cR.findAll();
		  List<Chat> newTemp = temp.stream().filter(s -> s.getFrom_user().compareToIgnoreCase(name2) ==0 || s.getFrom_user().compareToIgnoreCase(name1) ==0)
		  .filter(s -> s.getTo_user().compareToIgnoreCase(name2)==0 || s.getTo_user().compareToIgnoreCase(name1)==0).toList();
		  
		  return newTemp;
		  
		  
		  
	  }
}

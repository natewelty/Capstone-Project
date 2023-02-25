package com.cogent.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cogent.entity.Chat;
import com.cogent.requests.ChatRequest;
import com.cogent.service.ChatService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ChatController {

	@Autowired
	ChatService chatService;

	@PostMapping("/chat/create")
	public void Addmsg(@RequestBody ChatRequest chatRequest) {
		Chat chat = new Chat(chatRequest);
		chatService.saveMsg(chat);
	}

	@DeleteMapping("/chat/delete/{id}")
	public void deleteChatbyid(@PathVariable("id") int id) {

		chatService.deleteUseId(id);

	}

	@GetMapping("/chat/read/all")
	public List<Chat> getallmsg_left() {
		return chatService.showAll();
	}

	@GetMapping("/chat/read/history/{id1}/{id2}")
	public List<Chat> getHistory(@PathVariable("id1") int id1, @PathVariable("id2") int id2) {
		return chatService.findChat(id1, id2);
	}

}

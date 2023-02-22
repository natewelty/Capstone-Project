package com.cogent.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cogent.entity.Chat;
import com.cogent.requests.ChatRequest;
import com.cogent.service.ChatService;

@RestController
public class ChatController {

	@Autowired
	ChatService chatService;

	@PostMapping("/chat/addmsg")
	public void Addmsg(@RequestBody ChatRequest chatRequest) {
		Chat chat = new Chat(chatRequest);
		chatService.saveMsg(chat);
	}

	@DeleteMapping("/chat/deletechatbyid/{id}")
	public void deleteChatbyid(@PathVariable("id") int id) {

		chatService.deleteUseId(id);

	}

	@GetMapping("/chat/getallmsg")
	public List<Chat> getallmsg_left() {
		return chatService.showAll();
	}

	@GetMapping("/chat/gethistory/{name1}/{name2}")
	public List<Chat> getHistory(@PathVariable("name1") String name1, @PathVariable("name2") String name2) {
		return chatService.findChat(name1, name2);
	}

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from 'app/chat.service';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent  implements OnInit {
  user = this.userService.user;
  name!: string;
  chatList = this.chatService.getHistory(this.user.name,this.name);
  constructor(private userService:UserService, private router:Router, private chatService:ChatService, private route: ActivatedRoute){
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => this.name = params.get('users2') as unknown as string);
  
  }
  
 
 
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chat } from 'app/chat';
import { ChatService } from 'app/chat.service';
import { ChatRequest } from 'app/chatrequest';
import { User } from 'app/user';
import { UserService } from 'app/user.service';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent  implements OnInit {

  fromUser = this.userService.user;
  toUserId!: number;
  chatHistory!:Chat[];
  chatRequest!:ChatRequest;
  toUser!: User;
  sub!:any;
  
  
  constructor(private userService:UserService, private router:Router, private chatService:ChatService, private route: ActivatedRoute){
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => this.toUserId = params.get('user2') as unknown as number);
    console.log("to user is " + this.toUserId);
    this.getChat();
    this.chatRequest = new ChatRequest(this.fromUser.id,this.toUserId,"");
    let userGraber = this.userService.getUserById(this.toUserId);
    userGraber.subscribe((response:any) => this.toUser = response as User);
    
    this.sub=interval(5000);
    this.sub.subscribe((val: any)=>this.getChat());
    

    }
  
  
  isCurrentUser(userId:number):boolean{
    if(userId === this.fromUser.id){
      return true;
    }
    return false;
  }
  isNotCurrentUser(userId:number):boolean{
    if(userId === this.fromUser.id){
      return false;
    }
    return true;
  }
  
  
 
  getChat(){
    let chatList = this.chatService.getHistory(this.fromUser.id,this.toUserId);
    console.log("to user is still " + this.toUserId);
    chatList.subscribe(response=>{this.chatHistory=response as Chat[];});
  }

  onSubmit(){
    let chatSent = this.chatService.Addmsg(this.chatRequest);
    chatSent.subscribe(response=>{
      console.log(this.chatRequest);
      this.getChat();
      this.chatRequest.message="";
    });
  }
 
}

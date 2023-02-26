import { Component, Input, OnInit } from '@angular/core';

import { Answer } from '../answer';
import { AnswerService } from '../answer.service';
import { Router } from '@angular/router';
import { AnswerRequest } from '../answerrequest';
import { UserService } from 'app/user.service';


@Component({
  selector: 'app-createanswer',
  templateUrl: './createanswer.component.html',
  styleUrls: ['./createanswer.component.css']
})
export class CreateanswerComponent implements OnInit{
  @Input() questID!:number;
  answerRequest:AnswerRequest = new AnswerRequest(0,"","","");
  answers!:Answer[];
  constructor(private userService:UserService, private answerService:AnswerService, private router:Router){}
  ngOnInit(): void {
    this.getAnswers();
  }
  
  userName:String = this.userService.user.name;
createnewanswer(){
    let answerObserver = this.answerService.create(this.answerRequest);
    this.answerRequest.questionId=this.questID;
    this.answerRequest.created_by=this.userService.user.name;
    answerObserver.subscribe(answer=>{console.log(answer)
    this.getAnswers();
    this.answerRequest = new AnswerRequest(0,"","","");
    });
  
}
goToHomePage(){
  this.router.navigate(['/']);
}
onSubmit(){
  console.log(this.answerRequest);
  this.createnewanswer();
}
getAnswers(){
  let answerGrab = this.answerService.getanswerbyqid(this.questID);
    answerGrab.subscribe(a=>this.answers = a as Answer[]);
}
}

import { Component } from '@angular/core';

import { Answer } from '../answer';
import { AnswerService } from '../answer.service';
import { Router } from '@angular/router';
import { AnswerRequest } from '../answerrequest';


@Component({
  selector: 'app-createanswer',
  templateUrl: './createanswer.component.html',
  styleUrls: ['./createanswer.component.css']
})
export class CreateanswerComponent {

  answerRequest:AnswerRequest = new AnswerRequest(0,"","","");
  constructor(private answerService:AnswerService, private router:Router){}
  createAnswer:any[]=[{}];

createnewanswer(){

    let answerObserver = this.answerService.create(this.answerRequest);
    answerObserver.subscribe(answer=>{console.log(answer)});
  
}
goToHomePage(){
  this.router.navigate(['/']);
}
onSubmit(){
  console.log(this.answerRequest);
  this.createnewanswer();
}

}

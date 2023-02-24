import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'app/question';
import { QuestionService } from 'app/question.service';
import { User } from 'app/user';
import { UserService } from 'app/user.service';
import { Observable, queue } from 'rxjs';

@Component({
  selector: 'app-displayquestion',
  templateUrl: './displayquestion.component.html',
  styleUrls: ['./displayquestion.component.css']
})
export class DisplayquestionComponent {
  @Input()
  id!: number;
  
 
  
  question!:Question;
constructor(private userService:UserService, private questionService:QuestionService, private route:ActivatedRoute, private router:Router){
  
  
}

ngOnInit(){
  this.route.paramMap.subscribe(params=> this.id = params.get('id') as unknown as number);
  let questionGrab = this.questionService.getQuestionById(this.id);
  questionGrab.subscribe(q=>{this.question=q as Question})
}
}

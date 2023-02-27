import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'app/question.service';
import { QuestionRequest } from 'app/questionrequest';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['./newquestion.component.css']
})
export class NewquestionComponent {
  newQuestion: QuestionRequest = new QuestionRequest("","","","","");
  constructor(private userService:UserService,private questionService:QuestionService, private router:Router){}

  addQuestion(){
    this.newQuestion.qcreated_by= this.userService.user.name;
    this.questionService.addQuestion(this.newQuestion).subscribe((data:Object)=>{
      console.log(data);
      this.goToNewQuestion(data as number);  
    },
    error=>console.log(error))
  }

  goToNewQuestion(id:number){
    
    this.router.navigateByUrl(`/displayquestion/${id}`);
  }

  onSubmit(){
    console.log(this.newQuestion);
    this.addQuestion();
  }
  save(image_src:string){
    this.newQuestion.image_src=image_src;
  }
}

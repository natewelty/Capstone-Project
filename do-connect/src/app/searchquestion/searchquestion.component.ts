import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'app/question';
import { QuestionService } from 'app/question.service';
import { zipAll } from 'rxjs';


@Component({
  selector: 'app-searchquestion',
  templateUrl: './searchquestion.component.html',
  styleUrls: ['./searchquestion.component.css']
})
export class SearchquestionComponent {
  //question:Question = new Question(0, "", "", false, "");
  question!:Question;
  constructor(private questionService:QuestionService, private router:Router){
  }
  searchResponse:any[] = [{}];
  
  search(){
    if(this.question.id !=null){
      let questionObserver = this.questionService.getQuestionById(this.question.id);
      questionObserver.subscribe(question =>{this.searchResponse[0]= question as Question});
    } else if(this.question.topic != null){

    }
    else{
      //search all
    }
   
    
   
  }

  goToHomePage(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log(this.question);
    this.search();
  }


  

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'app/question';
import { QuestionService } from 'app/question.service';


@Component({
  selector: 'app-searchquestion',
  templateUrl: './searchquestion.component.html',
  styleUrls: ['./searchquestion.component.css']
})
export class SearchquestionComponent {
  question:Question = new Question(0, "", "", false, "");
  constructor(private quesionService:QuestionService, private router:Router){}
  searchResponse:any[] = [{}];

  search(){
    if(this.question.id !=null){
      let questionObserver = this.quesionService.getQuestionById(this.question.id);
      questionObserver.subscribe(question =>{this.searchResponse[0]= question as Question});



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

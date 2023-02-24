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
  question:Question = new Question(0, "", "", false, "");
  
  constructor(private quesionService:QuestionService, private router:Router){
    
  }
  searchResponse:any[] = [{}];
  
  search(){
    if(this.question.id !=null){
      let questionObserver = this.quesionService.getQuestionById(this.question.id);
      questionObserver.subscribe(question =>{this.searchResponse[0]= question as Question});
      console.log("sending");
      this.searchResponse[0].id=1;
      this.router.navigateByUrl(`/displayquestion/${this.searchResponse[0].id}`);
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

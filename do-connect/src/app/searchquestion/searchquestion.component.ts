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
  //question!:Question;
  constructor(private questionService:QuestionService, private router:Router){

  }
  searchResponse:any[] = [{}];
  displayTopicResults:boolean=false;
  search(){
    if(this.question.id !=0){
      let questionObserver = this.questionService.getQuestionById(this.question.id);
      questionObserver.subscribe(question =>{this.searchResponse[0]= question as Question;
        this.router.navigateByUrl(`/displayquestion/${this.searchResponse[0].id}`);
      });

    } else if(this.question.topic.length>1){
      console.log("searching by topic " + this.question.topic)
      let questionObserver = this.questionService.findByTopic(this.question.topic);
      questionObserver.subscribe(response =>{this.searchResponse =response as Question[];
        this.displayTopicResults=true;
      })
    }
    else{
      let questionObserver = this.questionService.getAllQuestions();
      questionObserver.subscribe(response=>{this.searchResponse = response as Question[];
      this.displayTopicResults=true;
      })
    }
  }

  select(id:number){
    this.router.navigateByUrl(`/displayquestion/${id}`);
  }
  goToHomePage(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log(this.question);
    this.search();
  }


  

}

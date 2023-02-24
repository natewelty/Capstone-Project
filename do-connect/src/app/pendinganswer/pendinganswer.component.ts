import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'app/answer';
import { AnswerService } from 'app/answer.service';


@Component({
  selector: 'app-pendinganswer',
  templateUrl: './pendinganswer.component.html',
  styleUrls: ['./pendinganswer.component.css']
})
export class PendinganswerComponent {
  fAnsList =this.answerService.getunapprovedanswer();
  answer:Answer=new Answer(0,0,"","",false,"","",[]);
 
  tableData:any[]=[{}];

  constructor(private answerService:AnswerService, private router:Router){}
  onSubmit(){
    this.fAnsList.subscribe(f=> {this.tableData= f as Answer[]});
  }
  goToHomePage(){
    this.router.navigate(['/']);

  }
 


}

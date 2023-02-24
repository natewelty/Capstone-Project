import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'app/answer';
import { AnswerService } from 'app/answer.service';


@Component({
  selector: 'app-pendinganswer',
  templateUrl: './pendinganswer.component.html',
  styleUrls: ['./pendinganswer.component.css']
})
export class PendinganswerComponent implements OnInit{
  fAnsList =this.answerService.getunapprovedanswer();
  answer:Answer=new Answer(0,0,"","",false,"","");
 
  tableData:any[]=[{}];

  constructor(private answerService:AnswerService, private router:Router){}
  ngOnInit(): void {
    this.fAnsList.subscribe(f=> {this.tableData= f as Answer[]});
  }
  onSubmit(){
    
  }
  goToHomePage(){
    this.router.navigate(['/']);

  }
 


}

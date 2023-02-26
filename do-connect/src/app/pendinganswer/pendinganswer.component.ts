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
  
  
 
  tableData:any[]=[{}];

  constructor(private answerService:AnswerService, private router:Router){}
  ngOnInit(): void {
    this.getTable();
  }
  onSubmit(){
    
  }
  goToHomePage(){
    this.router.navigate(['/']);

  }

  getTable(){
    let fAnsList =this.answerService.getunapprovedanswer();
    fAnsList.subscribe(f=> {this.tableData= f as Answer[]});
  }
  accept(index:number){
    this.tableData[index].status=true;
    let answerUpdate = this.answerService.updateanswer(this.tableData[index]);
    answerUpdate.subscribe(response=>{
      console.log(this.tableData[index].status);
      this.getTable();
    });
  }
  reject(index:number){
    this.tableData[index]
    let answerDelete = this.answerService.deleteanswer(this.tableData[index].id);
    answerDelete.subscribe(response=>{
      console.log("Deleted");
      this.getTable();
    });
  }


}

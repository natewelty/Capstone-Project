import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Question } from 'app/question';
import { QuestionService } from 'app/question.service';

@Component({
  selector: 'app-pendingquestion',
  templateUrl: './pendingquestion.component.html',
  styleUrls: ['./pendingquestion.component.css']
})
export class PendingquestionComponent implements OnInit{
  tableData:any[]=[{}];
  constructor(private questionService:QuestionService, private router:Router) {}
  ngOnInit(): void {
    this.getTable();
  }
  getTable(){
    let questionList =this.questionService.getFalseQuestion();
    questionList.subscribe(f=> {this.tableData= f as Question[]});
  }
  accept(index:number){
    this.tableData[index].status=true;
    console.log(this.tableData[index]);
    let questionUpdate = this.questionService.updateQuestion(this.tableData[index]);
    questionUpdate.subscribe(response=>{
      console.log(this.tableData[index].status);
      this.getTable();
    });
  }
  reject(index:number){
    this.tableData[index]
    let questionDelete = this.questionService.deleteById(this.tableData[index].id);
    questionDelete.subscribe(response=>{
      console.log("Deleted");
      this.getTable();
    });
  }


}

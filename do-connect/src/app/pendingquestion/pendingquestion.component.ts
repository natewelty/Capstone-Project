import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from 'app/fileuploader.service';

import { Question } from 'app/question';
import { QuestionService } from 'app/question.service';

@Component({
  selector: 'app-pendingquestion',
  templateUrl: './pendingquestion.component.html',
  styleUrls: ['./pendingquestion.component.css']
})
export class PendingquestionComponent implements OnInit{
  tableData:any[]=[{}];
  imageToShow:any;
  showImage:boolean=false;
  constructor(private questionService:QuestionService, private router:Router, private fileService:FileUploadService) {}
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
  showQuestionImage(img_src:string){
    let imageGrab = this.fileService.getFile(img_src);
    imageGrab.subscribe(response => { this.createImageFromBlob(response) 
    this.showImage=true;
    });
  }
  

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
    }, false);
  
    if (image) {
       reader.readAsDataURL(image);
    }
  }


}

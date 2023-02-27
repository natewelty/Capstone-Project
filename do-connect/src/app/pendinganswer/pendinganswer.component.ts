import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'app/answer';
import { AnswerService } from 'app/answer.service';
import { FileUploadService } from 'app/fileuploader.service';


@Component({
  selector: 'app-pendinganswer',
  templateUrl: './pendinganswer.component.html',
  styleUrls: ['./pendinganswer.component.css']
})
export class PendinganswerComponent implements OnInit{
  imageToShow:any;
  showImage:boolean=false;
  
 
  tableData:any[]=[{}];

  constructor(private answerService:AnswerService, private router:Router, private fileService:FileUploadService){}
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
    fAnsList.subscribe(f=> {this.tableData= f as Answer[]
      console.log(this.tableData[1].question)
    });

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
  showAnswerImage(img_src:string){
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

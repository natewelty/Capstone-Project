import { Component, Input, OnInit } from '@angular/core';

import { Answer } from '../answer';
import { AnswerService } from '../answer.service';
import { Router } from '@angular/router';
import { AnswerRequest } from '../answerrequest';
import { UserService } from 'app/user.service';
import { FileUploadService } from 'app/fileuploader.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-createanswer',
  templateUrl: './createanswer.component.html',
  styleUrls: ['./createanswer.component.css']
})
export class CreateanswerComponent implements OnInit {
  @Input() questID!: number;
  answerRequest: AnswerRequest = new AnswerRequest(0, "", "", "");
  answers!: Answer[];
  imageToShow!: any;
  displayAnswers: boolean = false;
  displayAnswerImage:boolean=false;

  sub=interval(500).subscribe((u:any)=>{
    this.getAnswers();
    this.sub.unsubscribe();
  });
  

  constructor(private userService: UserService, private fileService: FileUploadService, private answerService: AnswerService, private router: Router) {

  }
  ngOnInit(): void {

  }

  userName: String = this.userService.user.name;
  createnewanswer() {
    let answerObserver = this.answerService.create(this.answerRequest);
    this.answerRequest.questionId = this.questID;
    this.answerRequest.created_by = this.userService.user.name;
    answerObserver.subscribe(answer => {
      console.log(answer)
      this.getAnswers();
      this.answerRequest = new AnswerRequest(0, "", "", "");
    });

  }
  goToHomePage() {
    this.router.navigate(['/']);
  }
  onSubmit() {
    console.log(this.answerRequest);
    this.createnewanswer();
  }
  save(image_src: string) {
    this.answerRequest.img_src = image_src;
  }
  getAnswers() {
    console.log("Beginning getAnswers()")
    console.log(this.questID);
    let answerGrab = this.answerService.getanswerbyqid(this.questID);
    answerGrab.subscribe(a => {
      this.answers = a as Answer[];
      this.displayAnswers = true;
    });
  }
  getImage(img_src:String){
    let imageGrab = this.fileService.getFile(img_src);
    imageGrab.subscribe(response => { this.createImageFromBlob(response) 
    this.displayAnswerImage=true;
    });
  }
  


  createImageFromBlob(image: Blob,) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow=reader.result;
      
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}



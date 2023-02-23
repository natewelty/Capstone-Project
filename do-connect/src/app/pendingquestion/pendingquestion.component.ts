import { Component } from '@angular/core';

@Component({
  selector: 'app-pendingquestion',
  templateUrl: './pendingquestion.component.html',
  styleUrls: ['./pendingquestion.component.css']
})
export class PendingquestionComponent {
  
  descrition_question:string;
  image_src:string;
  status:boolean ;
  topic:string;
  title:string;
  constructor( descrition_question:string ="",image_src:string="",status:boolean =true,topic:string="",title:string="") {
 
    this.descrition_question = descrition_question;
    this.image_src = image_src;
    this.status = status;
    this.topic = topic;
    this.title = title;
  }




}

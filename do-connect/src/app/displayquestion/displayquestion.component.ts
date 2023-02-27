import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'app/answer';
import { AnswerService } from 'app/answer.service';
import { FileUploadService } from 'app/fileuploader.service';
import { Question } from 'app/question';
import { QuestionService } from 'app/question.service';
import { User } from 'app/user';
import { UserService } from 'app/user.service';
import { Observable, queue } from 'rxjs';

@Component({
  selector: 'app-displayquestion',
  templateUrl: './displayquestion.component.html',
  styleUrls: ['./displayquestion.component.css']
})
export class DisplayquestionComponent {

  
id: number =1;
  
imageToShow?:any;
  
question:Question = new Question;

constructor(private userService:UserService, private fileService:FileUploadService, private questionService:QuestionService,private answerService:AnswerService, private route:ActivatedRoute, private router:Router){
  
}

ngOnInit(){
  this.route.paramMap.subscribe(params=> {this.id = params.get('id') as unknown as number
  console.log(this.id);
  let questionGrab = this.questionService.getQuestionById(this.id);
  
  questionGrab.subscribe(q=>{this.question=q as Question;
    console.log("this is the question id in display question")
    console.log(this.question.id);
    let imageGrab = this.fileService.getFile(this.question.image_src); 
    imageGrab.subscribe(response=>{
      this.createImageFromBlob(response);


    })
  })

});
  
  
}


checkLoad():boolean{
  if(this.question.title.length>1){
    return true;
  }
  return false;

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

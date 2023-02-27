import { Question } from "./question";

export class Answer{
   id:number;
   question:Question;
   qid:number;
   description_answer:string;
   img_src:string;
   status:boolean;
   approved_by:string;
   created_by:string;
   

   constructor(id:number=0,question:Question=new Question(), qid:number=0, description_answer:string="",img_src:string="",status:boolean,approved_by:string="",created_by:string="" ){
    this.id=id;
    this.question=question;
    this.qid=qid;
    this.description_answer=description_answer;
    this.img_src=img_src;
    this.status=status;
    this.approved_by=approved_by;
    this.created_by=created_by;
    
   

   }
}
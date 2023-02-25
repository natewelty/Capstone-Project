export class AnswerRequest{
  
    questionId:number;
    description_answer:string;
    img_src:string;
  
    created_by:string;
   
 
    constructor( qid:number, description_answer:string="",img_src:string="",created_by:string="" ){
    
     this.questionId=qid;
     this.description_answer=description_answer;
     this.img_src=img_src;
     
     this.created_by=created_by;
   
    } 
}
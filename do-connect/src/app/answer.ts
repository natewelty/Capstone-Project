export class Answer{
   id:number;
   qid:number;
   description_answer:string;
   img_src:string;
   status:boolean;
   approved_by:string;
   created_by:string;
   authorities:any[];

   constructor(id:number=0,qid:number=0, description_answer:string="",img_src:string="",status:boolean,approved_by:string="",created_by:string="",authorities:any[] ){
    this.id=id;
    this.qid=qid;
    this.description_answer=description_answer;
    this.img_src=img_src;
    this.status=status;
    this.approved_by=approved_by;
    this.created_by=created_by;
    this.authorities=authorities;
   

   }
}
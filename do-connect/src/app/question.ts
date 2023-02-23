export class Question{
    id:number;
  descrition_question:string;
  image_src:string;
  status:boolean ;
  topic:string;
  title:string;
  constructor(id:number=0, descrition_question:string ="",image_src:string="",status:boolean =true,topic:string="",title:string="") {
    this.id = id;
    this.descrition_question = descrition_question;
    this.image_src = image_src;
    this.status = status;
    this.topic = topic;
    this.title = title;
  }
}
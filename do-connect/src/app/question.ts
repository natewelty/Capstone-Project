export class Question{
  id:number;
  description_question:string;
  image_src:string;
  status:boolean ;
  topic:string;
  title:string;
  datetime:number;
  qcreated_by:string;
  qapproved_by:string;

  constructor(id:number=17, descrition_question:string ="",image_src:string="",status:boolean =true,topic:string="",title:string="", datetime:number=Date.now(),qcreated_by:string="",qapproved_by:string="") {
    this.id = id;
    this.description_question = descrition_question;
    this.image_src = image_src;
    this.status = status;
    this.topic = topic;
    this.title = title;
    this.datetime=datetime;
    this.qcreated_by=qcreated_by;
    this.qapproved_by=qapproved_by;
  }
}
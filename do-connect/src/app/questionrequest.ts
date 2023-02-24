export class QuestionRequest{
    description_question:string;
    image_src:string;
    title:string;
    topic:string;
    qcreated_by:string;
    constructor( title:string="", topic:string="", description_question:string="",image_src:string="",qcreated_by:string=""){
        this.title=title;
        this.topic=topic;
        this.description_question=description_question;
        this.image_src=image_src;
        this.qcreated_by=qcreated_by;
        
    }
}
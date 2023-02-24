export class Chat{
    id:number;
    from_user: string;
	to_user: string;
	message: string;
	OffsetDateTime: Date;
    constructor(id:number=0,from_user: string="",
                to_user: string ="",message: string="",OffsetDateTime: Date= new Date())
    {
        this.id = id;
        this.from_user = from_user;
        this.to_user = to_user;
        this.message = message;
        this.OffsetDateTime = OffsetDateTime;

    }
}
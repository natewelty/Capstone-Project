export class Chat{
    id:number;
    from_user: number;
	to_user: number;
	message: string;
	datetime: Date;
    constructor(id:number=0,from_user: number=0,
                to_user: number =0,message: string="",datetime: Date= new Date())
    {
        this.id = id;
        this.from_user = from_user;
        this.to_user = to_user;
        this.message = message;
        this.datetime = datetime;

    }
}
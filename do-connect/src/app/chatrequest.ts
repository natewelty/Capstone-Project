export class ChatRequest {
    from_user: number;
	to_user: number;
	message: string;

    constructor(from_user: number=0,to_user: number =0,message: string=""){
        this.from_user = from_user;
        this.to_user = to_user;
        this.message = message;

    }
}
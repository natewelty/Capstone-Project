export class ChatRequest {
    from_user: string;
	to_user: string;
	message: string;

    constructor(from_user: string="",to_user: string ="",message: string=""){
        this.from_user = from_user;
        this.to_user = to_user;
        this.message = message;

    }
}
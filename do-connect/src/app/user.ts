export class User{
    id:number;
    username:string;
    password:string;
    name:string;
    email:string;
    authorities:{id:number,
                authority:string};
    constructor(id:number=0, username:string="", password:string="", name:string="",email:string="",authorities:{id:number,authority:string}={id:0,authority:""}){
        this.id=id;
        this.username=username;
        this.password=password;
        this.name=name;
        this.email=email;
        this.authorities=authorities;
    }
    
}
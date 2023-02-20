export class UserRequest{
    id:number;
    username:string;
    password:string;
    name:string;
    email:string;
    authorities:any[];
    constructor(id:number, username:string, password:string, role:string, name:string,email:string,authorities:any[]){
        this.id=id;
        this.username=username;
        this.password=password;
        this.name=name;
        this.email=email;
        this.authorities=authorities;
    }
}
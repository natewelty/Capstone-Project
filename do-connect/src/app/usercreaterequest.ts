export class UserCreateRequest{
    username:string;
    password:string;
    role:string ="USER";
    name:string;
    email:string;

    constructor(username:string, password:string, role:string = "USER", name:string,email:string){
        this.username=username;
        this.password=password;
        this.role=role;
        this.name=name;
        this.email=email;
    }
}
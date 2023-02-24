import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCreateRequest } from './usercreaterequest';
import { UserAuthenticationRequest } from './userauthenticationrequest';
import { UserRequest } from './userrequest';
import { User } from './user';
import { Token } from './token';
import { tokenGetter } from './app.module';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = new User(0,"",",",",","",{id:0,authority:""});
  private baseURL= "http://localhost:8080/user"
  constructor(private httpClient: HttpClient, private jwtHelper:JwtHelperService) { }

  signup(user:UserCreateRequest):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/adduser`,user);
  }
  login(user:UserAuthenticationRequest):Observable<Token>{
    return this.httpClient.post(`${this.baseURL}/login`,user) as Observable<Token>;
  }
  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/read/all`);
  }
  getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/read/id/${id}`);
  }
  getUserByUsername(username:string):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/read/${username}`)
  }
  updateUser(user:UserRequest):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update`,user);
  }
  getUsersByRole(role:string):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/read/role/${role}`);
  }
  setUser(user:User):void{
    this.user=user;
  }
  isLoggedIn():boolean{
    if (this.user.username.length>1){
      return true;
    }
    else return false;
  }
  isAdmin():boolean{
    if (this.user.authorities.authority.length>1){
      if (this.user.authorities.authority==="ADMIN"){
        return true;
      }
      
    }
    else{
      return false;
    }
    return false;
  }
  
}

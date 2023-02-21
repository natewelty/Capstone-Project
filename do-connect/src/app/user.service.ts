import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCreateRequest } from './usercreaterequest';
import { UserAuthenticationRequest } from './userauthenticationrequest';
import { UserRequest } from './userrequest';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL= "http://localhost:8080"
  constructor(private httpClient: HttpClient) { }

  signup(user:UserCreateRequest):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/adduser`,user);
  }
  login(user:UserAuthenticationRequest):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/login`,user);
  }
  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/getallusers`);
  }
  getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/getuserbyid/${id}`);
  }
  updateUser(user:UserRequest):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updateuser`,user);
  }
  getUsersByRole(role:string):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/getuserbyrole/${role}`);
  }
}

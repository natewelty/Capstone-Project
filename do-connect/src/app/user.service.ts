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
  
  getUserById(user:UserRequest):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/getuserbyid`,user)
  }
}

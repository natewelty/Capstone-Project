import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Chat } from './chat';
import { ChatRequest } from './chatrequest';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private baseURL= "http://localhost:8080/chat"
  constructor(private httpClient: HttpClient, private jwtHelper:JwtHelperService) { }
  
  Addmsg(chat:ChatRequest):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/create`,chat);
  }
  deleteChatbyid(id:number):Observable<Chat>{
    return this.httpClient.delete<Chat>(`${this.baseURL}/delete/${id}`);
  }

  getallmsg_left(): Observable<Chat[]>{
    return this.httpClient.get<Chat[]>(`${this.baseURL}/read/all`);
  }

  getHistory(id1:number, id2:number): Observable<Chat[]>{
    return this.httpClient.get<Chat[]>(`${this.baseURL}/read/history/${id1}/${id2}`);
  }

	


  
}

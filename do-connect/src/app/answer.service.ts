import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnswerRequest } from './answerrequest';
import { Answer } from './answer';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private baseURL = "http://localhost:8080/answer"

  constructor(private httpClient: HttpClient) { }

  create(answer:AnswerRequest): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/create`,answer);

  }
  readall():Observable<Answer[]>{
    return this.httpClient.get<Answer[]>(`${this.baseURL}/read/all`);
  }
  answerbyid(id:number):Observable<Answer>{
    return this.httpClient.get<Answer>(`${this.baseURL}/read/id/${id}`);

  }
  updateanswer(answer:AnswerRequest):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update`,answer);
  }
  getunapprovedanswer(): Observable<Answer[]>{
    return this.httpClient.get<Answer[]>(`${this.baseURL}/read/unapproved`);
  }
  deleteanswer(id:number): Observable<Answer>{
    return this.httpClient.delete<Answer>(`${this.baseURL}/delete/${id}`);
  }
  getanswerbyqid(qid:number): Observable<Answer[]>{
    return this.httpClient.get<Answer[]>(`${this.baseURL}/read/qid/${qid}`)
  }
}
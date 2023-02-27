import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionRequest } from './questionrequest';
import { Observable } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseURL = "http://localhost:8080/question"
  constructor(private httpClient:HttpClient) { }

  addQuestion(question:QuestionRequest):Observable<object> { 
    return this.httpClient.post(`${this.baseURL}/create`,question);
  }
  getAllQuestions():Observable<Question[]> {
    return this.httpClient.get<Question[]>(`${this.baseURL}/read/all`);
  }
  getQuestionById(id:number):Observable<Question> {
    return this.httpClient.get<Question>(`${this.baseURL}/read/id/${id}`);
  }
  updateQuestion(question:Question):Observable<object>{
    return this.httpClient.put(`${this.baseURL}/update`,question);
  }
  deleteById(id:number):Observable<Question> {
    return this.httpClient.delete<Question>(`${this.baseURL}/delete/${id}`);

  }
  getFalseQuestion():Observable<Question[]>{
    return this.httpClient.get<Question[]>(`${this.baseURL}/read/unapproved`);
  }
  findByTopic(topic:string):Observable<Question[]> {
    return this.httpClient.get<Question[]>(`${this.baseURL}/read/topic/${topic}`);
  }



  
}

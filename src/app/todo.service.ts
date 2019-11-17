import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ToDoService {

  SERVER_URL: string = "http://localhost:4200/api/";
  constructor(private httpClient: HttpClient) { }

  public getToDos(){ 
       return this.httpClient.get(this.SERVER_URL + 'todos');
  }

  public getToDo(id){
       return this.httpClient.get(`${this.SERVER_URL + 'todos'}/${id}`); 
  }
  public createToDo(todo: {id: number, title: string, description: string, status:boolean}){
      return this.httpClient.post(`${this.SERVER_URL + 'todos'}`, todo)
  }

  public deleteToDo(id){
      return this.httpClient.delete(`${this.SERVER_URL + 'todos'}/${id}`)
  }
  public updateToDo(todo: {id: number, title: string, description: string, status: boolean}){
      return this.httpClient.put(`${this.SERVER_URL + 'todos'}/${todo.id}`, todo)
  }
}

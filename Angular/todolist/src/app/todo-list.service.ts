import { Injectable } from '@angular/core';
import { Task } from 'src/app/task';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  protected httpOptions = {
    headers: new HttpHeaders({
      owner: 'IlyaBielov'
    }),
    observe: 'response' as 'body',
    params: new HttpParams()
  };

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<any> {
    return this.httpClient.get('https://api.todo-list.kotoblog.pp.ua/tasks', {
      headers: new HttpHeaders({
        owner: 'IlyaBielov'
      }),
      observe: 'body',
      params: new HttpParams()
    });
  }

  findOne(id: string) {
    return this.httpClient.get(`https://api.todo-list.kotoblog.pp.ua/tasks/${id}`, this.httpOptions);
  }

  save(task: Task) {
    return this.httpClient.post('https://api.todo-list.kotoblog.pp.ua/tasks', task, this.httpOptions);
  }

  update(task: Task) {
    return this.httpClient.post(`https://api.todo-list.kotoblog.pp.ua/tasks/${task.id}`, task, this.httpOptions);
  }

  delete(task: Task) {
    return this.httpClient.delete(`https://api.todo-list.kotoblog.pp.ua/tasks/${task.id}`, this.httpOptions);
  }
}

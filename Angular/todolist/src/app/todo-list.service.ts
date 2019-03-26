import { Injectable } from '@angular/core';
import { Task } from 'src/app/task';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  toDoList: Array<Task>;
  protected baseUrl = environment.apiUrl;

  protected httpOptions = {
    headers: new HttpHeaders({
      owner: 'IlyaBielov'
    }),
    observe: 'response' as 'body',
    params: new HttpParams()
  };

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<HttpResponse<Task[]>>(this.baseUrl, this.httpOptions).subscribe((res) => {
      this.toDoList = res.body;
    });
  }

  findOne(id: string) {
    return this.httpClient.get<HttpResponse<Task>>(this.baseUrl + id, this.httpOptions).subscribe();
  }

  save(task: Task) {
    this.httpClient.post(this.baseUrl, task, this.httpOptions).subscribe((res: HttpResponse<{ id: string }>) => {
      task.id = res.body.id;
      this.toDoList.push(task);
    });
  }

  update(task: Task) {
    return this.httpClient.post<Task>(this.baseUrl + task.id, task, this.httpOptions).subscribe();
  }

  delete(task: Task) {
    const idx: number = this.toDoList.findIndex(item => item.id === task.id);
    this.toDoList.splice(idx, 1);
    this.httpClient.delete<Task>(this.baseUrl + task.id, this.httpOptions).subscribe();
  }
}

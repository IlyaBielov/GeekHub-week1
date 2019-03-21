import { Injectable } from '@angular/core';
import { Task } from 'src/app/task';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  protected baseUrl = environment.apiUrl;

  protected httpOptions = {
    headers: new HttpHeaders({
      owner: 'IlyaBielov'
    }),
    observe: 'response' as 'body',
    params: new HttpParams()
  };

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<any> {
    return this.httpClient.get(this.baseUrl, {
      headers: new HttpHeaders({
        owner: 'IlyaBielov'
      }),
      observe: 'body',
      params: new HttpParams()
    });
  }

  findOne(id: string) {
    return this.httpClient.get(this.baseUrl + id, this.httpOptions);
  }

  save(task: Task) {
    return this.httpClient.post(this.baseUrl, task, this.httpOptions);
  }

  update(task: Task) {
    return this.httpClient.post(this.baseUrl + task.id, task, this.httpOptions);
  }

  delete(task: Task) {
    return this.httpClient.delete(this.baseUrl + task.id, this.httpOptions);
  }
}

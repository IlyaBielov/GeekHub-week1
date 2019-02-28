import { Injectable } from '@angular/core';
import { Task } from 'src/app/task';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: Array<Task>;

  constructor() {
    if (this.getLocalStarage() !== null) {
      this.todoList = this.getLocalStarage();
    } else {
      this.todoList = [];
    }
  }

  putTodoList() {
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  getLocalStarage(): Array<Task> {
    return JSON.parse(localStorage.getItem('todoList'));
  }
}

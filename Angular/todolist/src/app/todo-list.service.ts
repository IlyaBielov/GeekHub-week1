import { Injectable } from '@angular/core';
import { TodoList } from 'src/app/todoList';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: Array<TodoList>;

  constructor() {
    this.todoList = [];
  }
}

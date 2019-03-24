import { Component } from '@angular/core';
import { TodoListService } from 'src/app/todo-list.service';
import { Task } from '../task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  tasks: Array<Task>;

  constructor(private todoListService: TodoListService) { 
    this.tasks = todoListService.toDoList;
   }
}

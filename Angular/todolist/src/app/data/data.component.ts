import { Component } from '@angular/core';
import { TodoListService } from 'src/app/todo-list.service';
import { Task } from '../task';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {

  constructor(private todoListService: TodoListService) { }

  get newTasks(): number {
    const res = this.todoListService.toDoList.filter((item: Task) => item.status === 'new');
    return res.length;
  }

  get doneTasks(): number {
    const res = this.todoListService.toDoList.filter((item: Task) => item.status === 'done');
    return res.length;
  }
}

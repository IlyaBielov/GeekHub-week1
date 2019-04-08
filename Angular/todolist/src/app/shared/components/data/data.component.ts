import { Component } from '@angular/core';
import { TodoListService } from 'src/app/core/services/todo-list.service';
import { Task } from '../../../shared/models/task';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {

  constructor(private todoListService: TodoListService) { }

  get newTasks(): number {
    if (this.todoListService.toDoList) {
      const res = this.todoListService.toDoList.filter((item: Task) => item.status === 'new');
      return res.length;
    }
  }

  get doneTasks(): number {
    if (this.todoListService.toDoList) {
      const res = this.todoListService.toDoList.filter((item: Task) => item.status === 'done');
      return res.length;
    }
  }
}

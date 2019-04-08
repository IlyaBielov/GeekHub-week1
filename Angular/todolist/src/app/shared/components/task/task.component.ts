import { Component, Input } from '@angular/core';
import { Task, Status } from 'src/app/shared/models/task';
import { TodoListService } from 'src/app/core/services/todo-list.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task;
  toggleEditTask: boolean;
  show: boolean;

  constructor(private todoListService: TodoListService) {
    this.toggleEditTask = false;
  }

  doneTask(): void {
    if (this.task.status === Status.new) {
      this.task.status = Status.done;
    } else {
      this.task.status = Status.new;
    }

    this.todoListService.update(this.task);
  }

  editTask() {
    if (this.toggleEditTask) {
      this.todoListService.update(this.task);
    }
    this.toggleEditTask = !this.toggleEditTask;
  }

  deleteTask() {
    this.todoListService.delete(this.task);
  }

  moreInfo() {
    this.show = !this.show;
  }
}

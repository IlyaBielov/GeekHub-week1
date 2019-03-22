import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Task, Status } from 'src/app/task';
import { TodoListService } from 'src/app/_Services/todo-list.service';
import { SnackBarService } from '../_Services/snack-bar.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task;

  @ViewChild('focusInput') focusInput: ElementRef;

  editTaskVar = false;

  constructor(private todoListService: TodoListService,  private snack: SnackBarService) { }

  resloveTask(): void {
    if (this.task.status === Status.new) {
      this.task.status = Status.done;
    } else {
      this.task.status = Status.new;
    }

    this.todoListService.update(this.task).subscribe();
  }

  deleteTask() {
    this.todoListService.delete(this.task).subscribe();
  }

  editTask() {
    this.editTaskVar = true;

    setTimeout(() => {
      this.focusInput.nativeElement.focus();
    }, 0);
  }

  saveTask() {
    setTimeout(() => {
      this.focusInput.nativeElement.focus();
    }, 0);

    if (this.task.title.length < 5) {
      this.snack.openSnackBar('Min lenght 5 simbols', true);
      return;
    }
    this.editTaskVar = false;
    this.todoListService.update(this.task).subscribe(() => {
      this.snack.openSnackBar('Save', true);
    });
  }
}

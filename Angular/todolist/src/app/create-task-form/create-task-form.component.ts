import { Component, ElementRef, ViewChild } from '@angular/core';
import { TodoListService } from 'src/app/_Services/todo-list.service';
import { Status } from '../task';
import { SnackBarService } from '../_Services/snack-bar.service';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.scss']
})
export class CreateTaskFormComponent {
  @ViewChild('focusInput') focusInput: ElementRef;

  title: string;
  date: Date;
  authorName: string;
  massage: string;

  constructor(private todoListService: TodoListService, private snack: SnackBarService) { }

  addTask(): void {
    if (!this.title || !this.authorName || !this.date) {
      this.snack.openSnackBar('Fill the form', true);
      this.focusInput.nativeElement.focus();
    }

    this.todoListService.save(
      {
        title: this.title,
        responsible: this.authorName,
        dueDate: this.date,
        status: Status.new
      }).subscribe(() => {
        this.snack.openSnackBar('Save', true);
      });
  }
}

import { Component } from '@angular/core';
import { TodoListService } from 'src/app/todo-list.service';
import { IdService } from 'src/app/id.service';
import { Status } from '../task';
import { SnackBarService } from '../snack-bar.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  inputValue: string;
  date: Date;
  authorName: string;
  massage: string;

  constructor(private todoListService: TodoListService, private idService: IdService, private snack: SnackBarService) { }

  addTask(): void {
    if (!this.inputValue || !this.authorName || !this.date) {
      this.snack.openSnackBar('Fill the form', true);
    }

    this.todoListService.save(
      {
        id: this.idService.id,
        title: this.inputValue,
        responsible: this.authorName,
        dueDate: this.date,
        status: Status.new
      }).subscribe(() => {
        this.snack.openSnackBar('Save', true);
      });
  }
}

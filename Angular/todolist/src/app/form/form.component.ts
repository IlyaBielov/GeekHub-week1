import { Component } from '@angular/core';
import { TodoListService } from 'src/app/todo-list.service';
import { IdService } from 'src/app/id.service';
import { Status } from '../task';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  inputValue: string;
  date: Date;
  authorName: string;

  constructor(private todoListService: TodoListService, private idService: IdService) {
    this.date = new Date();
  }

  addTask(): void {
    if (!this.inputValue) { return; }

    this.todoListService.save(
      {
        id: this.idService.id,
        title: this.inputValue,
        responsible: this.authorName,
        dueDate: this.date,
        status: Status.new
      }).subscribe();

    this.inputValue = null;
  }
}

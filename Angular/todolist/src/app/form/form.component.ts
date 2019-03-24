import { Component } from '@angular/core';
import { TodoListService } from 'src/app/todo-list.service';
import { Status } from '../task';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  title: string;
  date: Date;
  authorName: string;

  constructor(private todoListService: TodoListService) {
    this.date = new Date();
  }

  addTask(): void {
    if (!this.title) { return; }

    this.todoListService.save({
      title: this.title,
      responsible: this.authorName,
      dueDate: this.date,
      status: Status.new
    });

    this.title = null;
  }
}

import { Component } from '@angular/core';
import { TodoListService } from 'src/app/core/services/todo-list.service';
import { Status } from '../../../shared/models/task';

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
    if (!this.title || !this.authorName) { return; }

    this.todoListService.save({
      title: this.title,
      responsible: this.authorName,
      dueDate: this.date.toISOString(),
      status: Status.new
    });
    this.authorName = null;
    this.title = null;
  }
}

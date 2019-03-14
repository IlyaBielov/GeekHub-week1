import { Component } from '@angular/core';
import { TodoListService } from 'src/app/todo-list.service';
import { IdService } from 'src/app/id.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  inputValue: string;
  date: Date;

  constructor(private todoListService: TodoListService, private idService: IdService) {
    this.date = new Date();
  }

  addTask(): void {
    if (!this.inputValue) { return; }

    this.todoListService.todoList.push({
      id: this.idService.id,
      text: this.inputValue,
      isChecked: false,
      isDeleted: false,
      date: this.date
    });

    this.todoListService.putTodoList();

    this.inputValue = null;
  }
}

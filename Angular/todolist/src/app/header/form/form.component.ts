import { Component } from '@angular/core';
import { TodoListService } from 'src/app/todo-list.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  inputValue: string;

  constructor(private todoListService: TodoListService) {
  }

  addTask(): void {
    if (!this.inputValue) { return; }

    this.todoListService.todoList.push({
      text: this.inputValue,
      isChecked: false,
      isDeleted: false
    });

    this.todoListService.putTodoList();

    this.inputValue = null;
  }
}

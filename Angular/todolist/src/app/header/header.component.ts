import { Component } from '@angular/core';
import { TodoListService } from 'src/app/todo-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'To Do List';

  constructor(private todoListService: TodoListService) {
  }

  get checkedItems() {
    return this.todoListService.todoList.filter((item) => item.isChecked);
  }
}

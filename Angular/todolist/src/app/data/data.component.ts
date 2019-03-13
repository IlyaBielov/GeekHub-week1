import { Component } from '@angular/core';
import { TodoListService } from 'src/app/todo-list.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {

  constructor(private todoListService: TodoListService) { }

  get checkedItems(): number {
    let res = this.todoListService.todoList.filter(item => item.isChecked);
    res = res.filter(item => !item.isDeleted);
    return res.length;
  }

  get inProgressItems(): number {
    let res = this.todoListService.todoList.filter(item => !item.isChecked);
    res = res.filter(item => !item.isDeleted);
    return res.length;
  }
}

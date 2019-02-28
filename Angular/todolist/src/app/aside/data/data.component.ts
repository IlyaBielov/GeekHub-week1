import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/todo-list.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
  }

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

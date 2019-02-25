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
    const res = this.todoListService.todoList.filter(item => item.isChecked);
    return res.length;
  }

  get allItems(): number {
    const res = this.todoListService.todoList;
    return res.length;
  }

  get inProgressItems(): number {
    const res = this.todoListService.todoList.filter(item => !item.isChecked);
    return res.length;
  }


}

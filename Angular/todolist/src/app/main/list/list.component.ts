import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/todo-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todoList = this.todoListService.todoList;

  constructor(private todoListService: TodoListService) {
  }

  ngOnInit() {
  }

}

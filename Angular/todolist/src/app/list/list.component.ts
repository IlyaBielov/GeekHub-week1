import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/todo-list.service';
import { Task } from '../task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  tasks: Task[];

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.todoListService.findAll().subscribe((body: Array<Task>) => {
      this.tasks = body;
    });
  }
}

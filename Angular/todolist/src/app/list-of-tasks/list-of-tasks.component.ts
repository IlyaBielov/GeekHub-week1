import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/_Services/todo-list.service';
import { Task } from '../task';

@Component({
  selector: 'app-list-of-tasks',
  templateUrl: './list-of-tasks.component.html',
  styleUrls: ['./list-of-tasks.component.scss']
})
export class ListOfTasksComponent implements OnInit {
  tasks: Task[];

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.todoListService.findAll().subscribe((body: Array<Task>) => {
      this.tasks = body;
    });
  }
}

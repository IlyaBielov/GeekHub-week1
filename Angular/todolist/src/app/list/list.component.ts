import { Component, OnInit } from '@angular/core';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  task: string = null;
  todoList: Array<{ text: string, isCheked: boolean }>;

  constructor() {
    this.todoList = [];
  }

  ngOnInit() {
  }

  addTask(): void {
    if (this.task === null) { return; }

    this.todoList.push({
      text: this.task,
      isCheked: false
    });
    this.task = null;
  }

  resloveTask(idx: number): void {
    this.todoList[idx].isCheked = !this.todoList[idx].isCheked;
  }

  deleteTask(idx: number): void {
    this.todoList.splice(idx, 1);
  }
}

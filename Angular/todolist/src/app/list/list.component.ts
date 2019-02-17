import { Component, OnInit } from '@angular/core';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  task: string = null;
  todoList: Array<string> = [];
  select: boolean = null;

  constructor() {
  }

  ngOnInit() {
  }

  addTask(): void {
    if (this.task === null) { return; }

    this.todoList.push(this.task);
    this.task = null;
  }

  onSelect(): void {
      this.select = true;
  }

  delteItem(item: string): void {
    for (const i in this.todoList) {
      if (this.todoList[i] === item) {
        this.todoList.splice(+i, 1);
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todoList: Array<{ text: string, isCheked: boolean }>;
  text: string;

  constructor() {
    this.todoList = [];
  }

  ngOnInit() {
  }

  addTask(): void {
    if (this.text === null) { return; }

    this.todoList.push({
      text: this.text,
      isCheked: false
    });
    this.text = null;
  }
}

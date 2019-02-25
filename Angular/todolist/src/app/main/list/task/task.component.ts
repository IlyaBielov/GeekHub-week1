import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoList } from 'src/app/todoList';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: TodoList;
  @Output() updateTask = new EventEmitter();

  editTaskVar = false;

  constructor() {
  }

  ngOnInit() {
  }

  resloveTask(): void {
    this.task.isChecked = !this.task.isChecked;
  }

  deleteTask() {
    this.updateTask.emit('delete');
  }

  editTask(): void {
    this.editTaskVar = !this.editTaskVar;
  }
}

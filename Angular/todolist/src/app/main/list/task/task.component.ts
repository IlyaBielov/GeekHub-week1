import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TodoList } from 'src/app/todoList';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  editTaskVar = false;

  @Input() task: TodoList;
  @Output() updateTask = new EventEmitter();

  @ViewChild('focusInput') focusInput: ElementRef;

  ngOnInit() {
  }

  constructor() {
  }

  resloveTask(): void {
    this.task.isChecked = !this.task.isChecked;
  }

  deleteTask() {
    this.updateTask.emit('delete');
  }

  editTask() {
    this.editTaskVar = true;

    setTimeout(() => {
      this.focusInput.nativeElement.focus();
    }, 0);
  }

  saveTask() {
    this.editTaskVar = false;
  }

}

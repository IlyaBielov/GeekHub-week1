import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Task } from 'src/app/task';
import { TodoListService } from 'src/app/todo-list.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() taskMessage = new EventEmitter();

  @ViewChild('focusInput') focusInput: ElementRef;

  editTaskVar = false;

  constructor(private todoListService: TodoListService) { }

  ngOnInit() { }

  resloveTask(): void {
    this.task.isChecked = !this.task.isChecked;

    this.todoListService.putTodoList();
  }

  deleteTask() {
    this.taskMessage.emit('delete');

    this.todoListService.putTodoList();
  }

  editTask() {
    this.editTaskVar = true;

    setTimeout(() => {
      this.focusInput.nativeElement.focus();
    }, 0);

    this.todoListService.putTodoList();
  }

  saveTask() {
    this.editTaskVar = false;

    this.todoListService.putTodoList();
  }
}

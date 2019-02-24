import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

 @Input() task: Task;

 constructor() {
 }

 ngOnInit() {
 }

  resloveTask(): void {
    this.task.isChecked = !this.task.isChecked;
  }

  deleteTask() {
  }
}

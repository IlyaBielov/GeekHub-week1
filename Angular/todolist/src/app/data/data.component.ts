import { Component } from '@angular/core';
import { TodoListService } from 'src/app/todo-list.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {

  constructor(private todoListService: TodoListService) { }

  // get checkedItems(): number {
  //   this.todoListService.findAll().subscribe(body => {
  //     this.res = body.filter(task => task.status === 'done');
  //   });
  //   return this.res.length ? this.res.length : 0;
  // }

  // get inProgressItems(): number {
  //   this.todoListService.findAll().subscribe(body => {
  //     this.res = body.filter(task => task.status === 'new');
  //   });
  //   return this.res.length ? this.res.length : 0;
  // }
}

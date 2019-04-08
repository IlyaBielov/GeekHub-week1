import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

  transform(toDoList: Array<Task>): Array<Task> {
    if (!toDoList) { return null; }

    toDoList.sort((a: Task, b: Task) => {
      if (a.dueDate < b.dueDate) {
        return -1;
      } else if (a.dueDate > b.dueDate) {
        return 1;
      } else {
        return 0;
      }
    });
    return toDoList;
  }
}

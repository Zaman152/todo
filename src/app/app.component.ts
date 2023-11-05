import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do Task';
  task: string = ''; // Input task
  allTasks: any[] = [];
  pendingTasks: any[] = [];
  completedTasks: any[] = [];

  addTask(item: string) {
    const newTask = { id: this.allTasks.length, name: item, completed: false };
    this.allTasks.push(newTask);
    this.pendingTasks.push(newTask);
    this.task = '';
  }

  removeTask(id: number) {
    this.allTasks = this.allTasks.filter(item => item.id !== id);
    this.pendingTasks = this.pendingTasks.filter(item => item.id !== id);
    this.completedTasks = this.completedTasks.filter(item => item.id !== id);
  }

  completedTask(id: number) {
    const task = this.allTasks.find(item => item.id === id);
    if (task) {
      task.completed = true;
      this.pendingTasks = this.pendingTasks.filter(item => item.id !== id);
      this.completedTasks.push(task);
    }
  }

  filterAll() {
    this.pendingTasks = this.allTasks;
    this.completedTasks = [];
  }

  filterPending() {
    this.pendingTasks = this.allTasks.filter(item => !item.completed);
    this.completedTasks = [];
  }

  filterCompleted() {
    this.pendingTasks = this.allTasks.filter(item => item.completed);
    this.completedTasks = [];
  }
}

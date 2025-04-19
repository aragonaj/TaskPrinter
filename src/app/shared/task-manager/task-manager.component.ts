import { Component } from '@angular/core';
import { TaskInputComponent } from '../task-input/task-input.component';
import { TaskDisplayComponent } from '../task-display/task-display.component';

@Component({
  selector: 'app-task-manager',
  imports: [
    TaskInputComponent,
    TaskDisplayComponent
  ],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.css'
})
export class TaskManagerComponent {

}

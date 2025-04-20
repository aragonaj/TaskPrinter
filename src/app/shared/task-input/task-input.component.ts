import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { InputService } from '../../core/services/input/input.service';

@Component({
  selector: 'app-task-input',
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css'
})

export class TaskInputComponent {
  // importo el servicio input
  private inputService = inject(InputService);

  form: FormGroup;
  title: FormControl;
  date: FormControl;
  priority: FormControl;
  message: FormControl;

  // lista de prioridades
  priorities = [
    { id: 'baja', value: 'baja' },
    { id: 'media', value: 'media' },
    { id: 'alta', value: 'alta' }
  ];

  constructor() {
    this.title = new FormControl('');
    this.date = new FormControl('');
    this.priority = new FormControl('');
    this.message = new FormControl('');

    this.form = new FormGroup({
      title: this.title,
      date: this.date,
      priority: this.priority,
      message: this.message,
    });
  }

  // función que se ejecutará al pulsar el botón de submit
  handleSubmit():void {
    // obtengo los valores de la tarea 
    let data = this.form.value;

    // almaceno el objeto en la array de tareas empleando la función del servicio
    this.inputService.addTask(data);

    // dejo en blanco los campos del formulario
    this.form.reset();
  }
}

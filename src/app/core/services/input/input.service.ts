import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  // creo el array de objetos donde se van a guardar todas las tareas
  taskArray: any [] = [];

  constructor() {}

  // Función para añadir una tarea que recibe del task-input
  addTask(task: any) {
    // para cargar las tareas ya almacenadas en el caso de que existiera ya una
    this.taskArray = JSON.parse(localStorage.getItem('task') || '[]');
    
    // para añadir la tarea recibida al array de tareas
    this.taskArray.push(task);
    // para comprobar el contenido de la array: 
    // console.log(this.taskArray);

    // para guardar dicho array en el almacenamiento local
    localStorage.setItem('task', JSON.stringify(this.taskArray));
    // para comprobar el contenido del almacenamiento local: 
    // console.log(localStorage.getItem("task"));
  }

  // Función para actualizar una tarea
  update() {}

  // Función para borrar una tarea
  deleteTask() {}
}

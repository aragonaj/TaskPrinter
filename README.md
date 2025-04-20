# CREADOR DE LISTAS DE TAREAS IMPRIMIBLES

## Características principales:

- Plantillas predefinidas: Ofrece diferentes estilos de listas (minimalista, colorida, con categorías, con espacio para notas, etc.).

- Personalización: Permite a los usuarios elegir colores, fuentes, iconos y disposición de columnas.

- Exportación en PDF o imagen: Para que el usuario pueda descargar e imprimir su lista fácilmente.

- Modo de prioridad: Opcionalmente, podrías incluir una forma de marcar tareas con diferentes niveles de prioridad.

- Interfaz limpia e intuitiva: Un diseño simple donde los usuarios pueden escribir sus tareas sin distracciones.

## Extras:

- Agregar diseños temáticos (listas para trabajo, estudio, compras, etc.).

## Colores 

#### --background-color: #D6FFF6
#### --text-color: #231651
#### --primary-color: #4DCCBD
#### --secondary-color: #2374AB
#### --light-coral: #FF8484

## Fuentes

- Títulos y encabezados: Monserrat Light
- Texto: Lora regular

## Pasos principales

- Funcionalidad de introducir datos
- Funcionalidad de mostrar datos en lista
- Funcionalidad de descargar la lista

- Funcionalidad de responsividad en pantallas

## Elementos principales de las listas

- Título
- Elementos de la lista
- Casillas de verificación
- Fechas / plazos
- Prioridad
- Notas o comentarios

## Elementos opcionales

- Categorías o etiquetas : hogar, trabajo, ejercicio
- Colores e iconos
- Recordatorios

## Creación de componentes básicos

- task-manager: el componente principal; donde se muestran los dos componentes siguientes

- task-input: entrada de datos
- task-display: muestra de datos

## Creación de los servicios básicos

#### input.service.ts:
    - addTask()
    - updateTask() para corregir errores
    - deleteTask()

#### display.service.ts:
    - getTask()
    - filterByPriority()
    - sortTask()

#### export.service.ts:
    - export() descarga en diferentes formatos 

## Implementación de patrones de diseño

## Estructura

#### Task: elementos básicos. Su contenido es: el título, la prioridad y el estado

#### TaskList: contenedor de tareas

#### TaskInputService: asistente que recibe tareas

#### TaskDisplayService: supervisor que organiza y presenta las tareas

#### TaskInput / TaskDisplay: espacio donde los usuarios escriben y ven las tareas

## Proceso

#### 1. El usuario introduce una tarea

#### 2. El servicio input.service la registra en la memoria/ almacenamiento local

#### 3. El servicio display.service la recoge y la organiza dependiendo de su prioridad o categoría

#### 4. El componente task-list muestra la tarea en pantalla

#### 5. El usuario puede corregir/ eliminar una tarea mediante el input.service

#### 6. El usuario puede exportar la lista de tareas mediante el export.service

## Fuentes

- Obtención de datos de un formulario en Angular: https://www.youtube.com/watch?v=YhmdLiX1RE8
- Validar que los campos cumplan los requisitos: https://www.youtube.com/watch?v=U1zcI4JqNpw

> #### Patrones de diseño

- https://refactoring.guru/design-patterns/catalog

#### ng serve
#### ng serve -o
#### ng g c nombre-del-componente
#### ng generate service nombre-del-servicio

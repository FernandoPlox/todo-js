
import './styles.css';

import { Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class.js';

export const todoList = new TodoList();//creamos una nueva lista de tareas
// ---ejemplo de como se crea una tarea---
// const tarea    = new Todo('Aprender JavaScript!!'); 
// //creamos una nueva tarea 

// todoList.nuevoTodo( tarea );

// console.log(todoList);
// crearTodoHtml( tarea );



todoList.todos.forEach( todo => crearTodoHtml( todo ) );
//aqui se recorre la lista de tareas y se crea un html por cada tarea

// todoList.todos[0].imprimirClase();

console.log( 'todos', todoList.todos );




















// esta archivo cumple con la funcion de 
// crear una lista de tareas con dos tareas
// importar las clases Todo y TodoList y
// y mostrarla en consola




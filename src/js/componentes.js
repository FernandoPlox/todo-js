import { Todo } from '../classes';
import { todoList } from '../index.js';

//Referencias en el html
const divTodoList = document.querySelector('.todo-list');
//Se selecciona al 'ul' con la clase todo-list

const txtInput = document.querySelector('.new-todo'); 
//Se selecciona al input con la clase new-todo

const btnBorrar = document.querySelector('.clear-completed');
//Se selecciona al boton con la clase clear-completed

//Referencias para los filtros
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');


export const crearTodoHtml = (todo) => {
  const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild ); 
    // aqui se agrega el div al ul con la clase todo-list
};

// Eventos
txtInput.addEventListener('keyup', ( event ) => {
    if (event.keyCode === 13 && txtInput.value.length > 0) {
        //si se presiona la tecla enter y el input tiene un valor

        console.log(txtInput.value);
        const nuevoTodo = new Todo( txtInput.value );
        //creamos una nueva tarea con el valor del input

        todoList.nuevoTodo( nuevoTodo );
        //agregamos la nueva tarea a la lista de tareas

        crearTodoHtml( nuevoTodo );
        //creamos un nuevo elemento html con la tarea
        

        //borrar el valor del input
        txtInput.value = '';
    }
    
});

divTodoList.addEventListener('click', ( event )=>{
    const nombreElemento = event.target.localName; 
    // iaca se obtiene el nombre del elemento que se hizo click
    // (input, label, button)

    const todoElemento   = event.target.parentElement.parentElement;
    //seleccionamos el li que contiene el input, label y button

    const todoId         = todoElemento.getAttribute('data-id');
    //obtenemos el id del li
    
    if (nombreElemento.includes('input')) { //click en el check 
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed'); 
        //toggle agrega o quita la clase completed
        
    } else if ( nombreElemento.includes('button')){
        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento ); 
        //se elimina el li del ul con la clase todo-list
        // 'removeChild' elimina un nodo hijo del nodo actual
    }
});

btnBorrar.addEventListener('click' , ( )=> {

        todoList.eliminarCompletados();

        for (let i = divTodoList.children.length -1; i >= 0; i--) {
            const elemento = divTodoList.children[i];
            if (elemento.classList.contains('completed')) {
                //contains es un metodo que devuelve true si el elemento 
                //tiene la clase completed
                divTodoList.removeChild(elemento);
            }
        };
})

ulFiltros.addEventListener('click' , ( event ) => {
    console.log( event.target.text )
    
    const filtro = event.target.text;
    if (!filtro) { return; } //si no hay filtro se sale de la funcion 

    anchorFiltros.forEach( elem => elem.classList.remove('selected'));
    //removemos la clase selected de todos los elementos del filtro

    event.target.classList.add('selected'); 
    //agregamos la clase selected al elemento que se hizo click

    for ( const elemento of divTodoList.children ) { //recorremos los elementos del ul
        
        elemento.classList.remove('hidden'); //removemos la clase hidden
        const completado =  elemento.classList.contains('completed');
        // esto es para saber si el elemento tiene la clase completed

        switch ( filtro ){
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;

                case 'Completados':
                    if (!completado) {
                        elemento.classList.add('hidden');
                    }
                break;
        };
 
    }

})

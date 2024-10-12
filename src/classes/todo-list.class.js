import { Todo } from './todo.class'; //importamos la clase Todo
export class TodoList { //esta es una clase que se encarga de manejar la lista de tareas

    constructor() {
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ){ //este metodo recibe un todo como parametro y lo agrega a la lista de tareas
        this.todos.push( todo ); 
        this.guardarLocalStorage();
    }

    eliminarTodo ( id ){ 
        
       this.todos = this.todos.filter( todo => todo.id != id );
       //filter es un metodo de los arrays que recibe una funcion como parametro 
       // y devuelve un nuevo array con los elementos que cumplan la condicion
       // osea que el id de la tarea sea diferente al id que se recibe como parametro, ese id sera eliminado
       this.guardarLocalStorage();
    }

    marcarCompletado( id ){
        for (const todo of this.todos) { //recorremos la lista de tareas
            console.log(id, todo.id);

            if ( todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            };
        };
    }

    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();
    } 

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos)); 
    }

    cargarLocalStorage(){
    //si existe un item en el local storage llamado 'todo'
    // entonces se convierte en un objeto JSON
    // getItem es un metodo de localStorage que recibe un string
        this.todos = ( localStorage.getItem( 'todo' ) ) 
                        ? JSON.parse( localStorage.getItem('todo') ) 
                        : [];

        this.todos = this.todos.map( obj => Todo.fromJson( obj ) ); 
        // se puede resumir de la siguiente manera 
        // this.todos = this.todos.map( Todo.fromJson );
         
    }
}      
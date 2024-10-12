export class Todo {

    static fromJson({ id, tarea, completado, creado}) { 
        //desestructuramos el objeto JSON que se recibe como parametro
        const tempTodo = new Todo( tarea );
        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }


    constructor( tarea ){   //esto es un constructor que recibe una tarea como parametro
        this.tarea = tarea; //esto es un atributo de la clase Todo que recibe la tarea
        this.id         = new Date().getTime();
        this.completado = false;
        this.creado     = new Date();
    }

    imprimirClase(){
        console.log(`${ this.tarea } - ${ this.id }`);
    }

}
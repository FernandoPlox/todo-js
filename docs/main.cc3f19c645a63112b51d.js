/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ todoList)
});

;// ./src/classes/todo.class.js
function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(b,a){if(!(b instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,_toPropertyKey(c.key),c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function _toPropertyKey(a){var b=_toPrimitive(a,"string");return"symbol"==_typeof(b)?b:b+""}function _toPrimitive(a,b){if("object"!=_typeof(a)||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=_typeof(d))return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}var Todo=/*#__PURE__*/function(){function a(b){//esto es un constructor que recibe una tarea como parametro
//esto es un atributo de la clase Todo que recibe la tarea
_classCallCheck(this,a),this.tarea=b,this.id=new Date().getTime(),this.completado=!1,this.creado=new Date}return _createClass(a,[{key:"imprimirClase",value:function(){console.log("".concat(this.tarea," - ").concat(this.id))}}],[{key:"fromJson",value:function(b){var c=b.id,d=b.tarea,e=b.completado,f=b.creado,g=new a(d);//desestructuramos el objeto JSON que se recibe como parametro
return g.id=c,g.completado=e,g.creado=f,g}}])}();
;// ./src/classes/todo-list.class.js
function todo_list_class_typeof(a){"@babel/helpers - typeof";return todo_list_class_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},todo_list_class_typeof(a)}function _createForOfIteratorHelper(b,c){var d="undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(!d){if(Array.isArray(b)||(d=_unsupportedIterableToArray(b))||c&&b&&"number"==typeof b.length){d&&(b=d);var e=0,f=function(){};return{s:f,n:function(){return e>=b.length?{done:!0}:{done:!1,value:b[e++]}},e:function(a){throw a},f:f}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var g,h=!0,i=!1;return{s:function(){d=d.call(b)},n:function(){var a=d.next();return h=a.done,a},e:function(a){i=!0,g=a},f:function(){try{h||null==d["return"]||d["return"]()}finally{if(i)throw g}}}}function _unsupportedIterableToArray(b,c){if(b){if("string"==typeof b)return _arrayLikeToArray(b,c);var a={}.toString.call(b).slice(8,-1);return"Object"===a&&b.constructor&&(a=b.constructor.name),"Map"===a||"Set"===a?Array.from(b):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(b,c):void 0}}function _arrayLikeToArray(b,c){(null==c||c>b.length)&&(c=b.length);for(var d=0,f=Array(c);d<c;d++)f[d]=b[d];return f}function todo_list_class_classCallCheck(b,a){if(!(b instanceof a))throw new TypeError("Cannot call a class as a function")}function todo_list_class_defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,todo_list_class_toPropertyKey(c.key),c)}function todo_list_class_createClass(a,b,c){return b&&todo_list_class_defineProperties(a.prototype,b),c&&todo_list_class_defineProperties(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function todo_list_class_toPropertyKey(a){var b=todo_list_class_toPrimitive(a,"string");return"symbol"==todo_list_class_typeof(b)?b:b+""}function todo_list_class_toPrimitive(a,b){if("object"!=todo_list_class_typeof(a)||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=todo_list_class_typeof(d))return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}//importamos la clase Todo
var TodoList=/*#__PURE__*/function(){//esta es una clase que se encarga de manejar la lista de tareas
function a(){todo_list_class_classCallCheck(this,a),this.cargarLocalStorage()}return todo_list_class_createClass(a,[{key:"nuevoTodo",value:function(a){//este metodo recibe un todo como parametro y lo agrega a la lista de tareas
this.todos.push(a),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(a){//filter es un metodo de los arrays que recibe una funcion como parametro 
// y devuelve un nuevo array con los elementos que cumplan la condicion
// osea que el id de la tarea sea diferente al id que se recibe como parametro, ese id sera eliminado
this.todos=this.todos.filter(function(b){return b.id!=a}),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(a){var b,c=_createForOfIteratorHelper(this.todos);try{for(c.s();!(b=c.n()).done;){var d=b.value;if(console.log(a,d.id),d.id==a){d.completado=!d.completado,this.guardarLocalStorage();break}}}catch(a){c.e(a)}finally{c.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter(function(a){return!a.completado}),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){//si existe un item en el local storage llamado 'todo'
// entonces se convierte en un objeto JSON
// getItem es un metodo de localStorage que recibe un string
this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(function(a){return Todo.fromJson(a)})}}])}();
;// ./src/js/componentes.js
function componentes_createForOfIteratorHelper(b,c){var d="undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(!d){if(Array.isArray(b)||(d=componentes_unsupportedIterableToArray(b))||c&&b&&"number"==typeof b.length){d&&(b=d);var e=0,f=function(){};return{s:f,n:function(){return e>=b.length?{done:!0}:{done:!1,value:b[e++]}},e:function(a){throw a},f:f}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var g,h=!0,i=!1;return{s:function(){d=d.call(b)},n:function(){var a=d.next();return h=a.done,a},e:function(a){i=!0,g=a},f:function(){try{h||null==d["return"]||d["return"]()}finally{if(i)throw g}}}}function componentes_unsupportedIterableToArray(b,c){if(b){if("string"==typeof b)return componentes_arrayLikeToArray(b,c);var a={}.toString.call(b).slice(8,-1);return"Object"===a&&b.constructor&&(a=b.constructor.name),"Map"===a||"Set"===a?Array.from(b):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?componentes_arrayLikeToArray(b,c):void 0}}function componentes_arrayLikeToArray(b,c){(null==c||c>b.length)&&(c=b.length);for(var d=0,f=Array(c);d<c;d++)f[d]=b[d];return f}//Referencias en el html
var divTodoList=document.querySelector(".todo-list"),txtInput=document.querySelector(".new-todo"),btnBorrar=document.querySelector(".clear-completed"),ulFiltros=document.querySelector(".filters"),anchorFiltros=document.querySelectorAll(".filtro");//Se selecciona al 'ul' con la clase todo-list
//Se selecciona al input con la clase new-todo
//Se selecciona al boton con la clase clear-completed
//Referencias para los filtros
var crearTodoHtml=function(a){var b="\n    <li class=\"".concat(a.completado?"completed":"","\" data-id=\"").concat(a.id,"\">\n        <div class=\"view\">\n            <input class=\"toggle\" type=\"checkbox\" ").concat(a.completado?"checked":"",">\n            <label>").concat(a.tarea,"</label>\n            <button class=\"destroy\"></button>\n        </div>\n        <input class=\"edit\" value=\"Create a TodoMVC template\">\n    </li>"),c=document.createElement("div");c.innerHTML=b,divTodoList.append(c.firstElementChild)};// Eventos
txtInput.addEventListener("keyup",function(a){if(13===a.keyCode&&0<txtInput.value.length){console.log(txtInput.value);var b=new Todo(txtInput.value);//creamos una nueva tarea con el valor del input
//agregamos la nueva tarea a la lista de tareas
//creamos un nuevo elemento html con la tarea
//borrar el valor del input
todoList.nuevoTodo(b),crearTodoHtml(b),txtInput.value=""}}),divTodoList.addEventListener("click",function(a){var b=a.target.localName,c=a.target.parentElement.parentElement,d=c.getAttribute("data-id");// iaca se obtiene el nombre del elemento que se hizo click
// (input, label, button)
//seleccionamos el li que contiene el input, label y button
//obtenemos el id del li
b.includes("input")?(todoList.marcarCompletado(d),c.classList.toggle("completed")):b.includes("button")&&(todoList.eliminarTodo(d),divTodoList.removeChild(c))}),btnBorrar.addEventListener("click",function(){todoList.eliminarCompletados();for(var a,b=divTodoList.children.length-1;0<=b;b--)a=divTodoList.children[b],a.classList.contains("completed")&&divTodoList.removeChild(a)}),ulFiltros.addEventListener("click",function(a){console.log(a.target.text);var b=a.target.text;if(b){anchorFiltros.forEach(function(a){return a.classList.remove("selected")}),a.target.classList.add("selected");//agregamos la clase selected al elemento que se hizo click
var c,d=componentes_createForOfIteratorHelper(divTodoList.children);try{for(d.s();!(c=d.n()).done;){var e=c.value;e.classList.remove("hidden");//removemos la clase hidden
var f=e.classList.contains("completed");// esto es para saber si el elemento tiene la clase completed
"Pendientes"===b?f&&e.classList.add("hidden"):"Completados"===b?f||e.classList.add("hidden"):void 0}}catch(a){d.e(a)}finally{d.f()}}//si no hay filtro se sale de la funcion 
});
;// ./src/index.js
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class.js';
var todoList=new TodoList;//creamos una nueva lista de tareas
// ---ejemplo de como se crea una tarea---
// const tarea    = new Todo('Aprender JavaScript!!'); 
// //creamos una nueva tarea 
// todoList.nuevoTodo( tarea );
// console.log(todoList);
// crearTodoHtml( tarea );
//aqui se recorre la lista de tareas y se crea un html por cada tarea
// todoList.todos[0].imprimirClase();
todoList.todos.forEach(function(a){return crearTodoHtml(a)}),console.log("todos",todoList.todos);
/******/ })()
;
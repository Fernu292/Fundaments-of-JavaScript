'use strict'

//Arrays son una coleccion de datos de algun tipo en JS son dinamicos 
//Y pueden ser de datos variables int bool string char etc.


let nombre = "Luis Fernando";


//Declaracion de arrays de distintas formas 
let nombres = ['Luis Fernando', "Raul", 'Maryel', 'Angel Samuel'];

let lenguajes = new Array('PHP', 'JS', "C++", 'Go');


console.log(nombre);
console.log(nombres);
console.log(lenguajes);


console.log(nombres[0]);

//Crear un array en base a otros
//Para ello usamos ... antes del nombre del array o la variable a ingresar

let array = [...lenguajes, ...nombres];

console.log(array);

//Inyectar variable en una posicion 
//Seleccionamos el indice al cual lo inyectamos, lo mismo aplica si queremos 
//ingresar otro array apartir de una posicion
nombres [4] = nombre;
console.log(nombres);
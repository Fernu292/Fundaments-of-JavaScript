'use strict'

//Busquedas en un array 

let lenguajes = ['C++', 'C', 'PHP', 'JavaScript'];

//Funcion find a la que le pasamos un callback para buscar un 
//Elemento especifico en un array

let busqueda = lenguajes.find( lenguaje =>  lenguaje === 'PHP');

console.log(busqueda);


//Busqueda de un elemento retornando su indice 
busqueda = lenguajes.findIndex( lenguaje => lenguaje === 'C++');

console.log(busqueda);

//Buscar por rangos devolviendo true or false en caso de cumplirse la
//condicion

let precios = [10, 20, 30, 40];

busqueda = precios.some( precio => precio<10);

console.log(busqueda);


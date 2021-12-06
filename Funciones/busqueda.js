'use strict'

//Busquedas en un string 


//Buscar una palabra en un string 
let text = "Hola mundo Hola";

let palabra = text.search('Hola');
console.log(palabra);

//Match devuelve un array con el texto encontrado 

palabra = text.match('Hola');
console.log(palabra);

//Para buscar globalmente una palabra usamos /" "/gi para que busque 
//Globalmente la palabra

palabra = text.match(/Hola/g);
console.log(palabra);


//Obtener un substring en un rango 

palabra = text.substr(0, 5);
console.log(palabra);


//Obtener una letra especifica 

palabra = text.charAt(0);

console.log(palabra);

//StartWith usado para retornar true or false en base a si lo encuentra 
//o no al inicio del string

palabra = text.startsWith('mundo');

console.log(palabra);

//Endwith usado para buscar al final 

palabra = text.endsWith('Hola');

console.log(palabra);

//Busca una palabra en un string y retorna bool 

palabra = text.includes('mundo');

console.log(palabra);
'use strict'

//Metodos para transformar textos

let numero = 5;
let text = 'Hola mundo';
let texto2 = 'Luis Fernando';

//int a string 

numero = numero.toString();

console.log(numero);
console.log(typeof numero);


//lowercase to uppercase

text = text.toLocaleUpperCase();

console.log(text);


//Uppercase to lowercase

texto2 = texto2.toLocaleLowerCase();

console.log(texto2);


//Longitud de string 

let size = text.length;

console.log(size);


//Concatenar textos templatestring

let texTotal = text + " "+texto2;

console.log(texTotal);

//Template string 

console.log(`${text} ${texto2}`);
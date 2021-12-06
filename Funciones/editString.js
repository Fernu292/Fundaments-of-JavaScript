'use strict'

let text = "Aprendiendo JavaScript en Visual Studio Code";

//Reemplazar una palabra en un string 

let edit = text.replace('JavaScript', 'C++');

console.log(edit);


//Separar string a partir de un indice 
//O en un rango de indices
edit = text.slice(12);
console.log(edit)


//Almacenar palabras en un array y separarlo por espacios

edit = text.split(" ");
console.log(edit);

//Metodo trim usado para quitar espacios por delante y por detras en un
//string

edit = text.trim();
console.log(edit);

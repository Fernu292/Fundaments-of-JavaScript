'use strict'
const prompt = require('prompt-sync')();


var texto = 'Hola mundo soy una variable global';
let numero = prompt('Digita un numero: ');

numero.toString();//Metodo para convertir int a string

console.log(typeof numero);

function holaMundo(text){
    console.log(text);
}


holaMundo(texto);
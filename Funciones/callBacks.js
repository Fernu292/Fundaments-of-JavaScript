'use strict'

//Funciones anonimas 
//No tienen un nombre especifico, las instrucciones se guardan en una 
//Variable y se usa para los callbacks


//Declaracion de variable anonima 
let pelicula = function(nombre){ return `La pelicula es: ${nombre}`};

//Funcion anonima de array function 

let pelicula2 = (nombre) =>{ return `La pelicula es: ${nombre}`};

console.log(pelicula('Hombre araña'));

console.log(pelicula2('Doctor Stange'));


//Un callback es una funcion dentro de otra 

function suma(num1, num2, sumaYmuestra, SumaPorDos){
    let sumar = num1+num2;

    sumaYmuestra(sumar);

    SumaPorDos(sumar);

    return sumar;
}


//Callback con funciones anonimas

suma(4, 5, function(dato){
    console.log(`La suma es: ${dato}`);
},function (dato){

    let dato2 = dato*2;
    console.log(`La suma por dos es: ${dato2}`);
});
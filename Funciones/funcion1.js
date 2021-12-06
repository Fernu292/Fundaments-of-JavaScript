'use strict'

//Funciones 

function suma(a, b){
    return a+b;
}

console.log(suma(1,6));

//Arrow function 

const suma2 = (a, b) => a+b;

console.log(suma2(2,8));

//Parametros rest y spread

function listFruit(fruit1, fruit2){
    console.log(`La fruta 1 es: ${fruit1}`);
    console.log(`La fruta 2 es: ${fruit2}`);
}

listFruit('Manzana', 'Pera');
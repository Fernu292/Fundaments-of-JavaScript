'use strict'
const prompt = require('prompt-sync')();
//Longitud de array con .length


//Declarar array
let lenguages = ['C++', 'C', 'PHP', 'JavaScript'];
//Usar metodo length
let size = lenguages.length;
console.log(size);



//Obtener elemento de array por medio del usuario y validarlo
let n = parseInt(prompt('Digita un numero de indice: '));

if (n>=size){
    
    n = parseInt(prompt('Digite un indice valido: '));    
}

let element = lenguages[n];

console.log(`El valor seleccionado es: ${element}`);




//Mostrar elementos de un array con bucle for 
console.log('\nMostrando elementos con for\n');

for(let i=0; i<size; i++){
    console.log(lenguages[i]);
}

//Mostrar elementos de un array con FOREACH
console.log('\nMostrando con foreach\n')
lenguages.forEach( (elemento)=>{
    console.log(elemento);
});


//Mostrar array con FOR IN 

console.log('\nMostrar con for in\n');
for(let lenguage in lenguages){
    console.log(lenguages[lenguage]);
}
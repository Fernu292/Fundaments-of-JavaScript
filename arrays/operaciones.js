'use strict'

let lenguages = ['C', 'C++', 'PHP', 'Python'];

//Añadir elementos a un array en el ultimo indice

lenguages.push('JavaScript');
console.log(lenguages);


//Eliminar elemento de un array 
//El metodo pop elimina el ultimo elemento de un array 

lenguages.pop();
console.log(lenguages);

//Eliminar por indice un elemento 

let elemento = lenguages.indexOf('C');

if(elemento>-1){
    //Usamos el metodo splice para eliminar en un rango apartir de un
    //indice hasta otro
    lenguages.splice(elemento, 1);
}

console.log(lenguages);


//Convertir un array a string

let lengString = lenguages.join();

console.log(lengString);


//Convertir un string a array con el metodo split();
//Le pasamos el parametro que define como separar los elementos del string
//Para convertirlos en un array 
let strArr = lengString.split(",");

console.log(strArr);





//Ordenamiento de arrays con distintos metodos 

//Ordenar array por orden alfabetico con sort()

lenguages.sort();

console.log(lenguages);

//Ordenar el array en orden inverso 

lenguages.reverse();

console.log(lenguages);



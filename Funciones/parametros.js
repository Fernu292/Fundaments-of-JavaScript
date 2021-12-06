'use stict'

//Parametros REST // SPREAD

function frutas(fruta1, fruta2){
    console.log(`La primera fruta es : ${fruta1}`);
    console.log(`La segunda fruta es: ${fruta2}`);
}

frutas('manzana', 'naranja')


// Los parametros rest se hace con ... para tomar mas parametros en 
//Una funcion, sirve para tomar parametros de forma indefinida y de 
//Y los valores seran guardados en un array


//Rest
function frutas2(fruta1, fruta2, ...frutaN){
    console.log(`Fruta 1: ${fruta1}`);
    console.log(`Fruta 2: ${fruta2}`);
    console.log(`Resto de frutas: ${frutaN}`);
}

frutas2('manzana', 'pera', ' sandia', ' pepino', " guayaba");

//El parametro Spread es pasarle los parametros de un array conocido 
//a una funcion y los tome como los primeros parametros

const Verduras = ['Brocoli', 'Lechuga'];

//Spread
frutas2(...Verduras, 'manzana', ' pera', ' sandia', ' pepino', " guayaba");
//An arrays is a list of data orded by index from zero 0 
//The data type is dinamic and have two froms to declarate an array 

const array = [1,2,4,5,6,7];
const array2 = new Array(5,6,7,8,9,10);

//You Can acces an element from array by his index
console.log('Get an element by id: ');
console.log(array[0]);

//Also you can made an array based in others with spread operator

console.log("Spread operator for made an new array: ");
const array3 = [...array,...array2];

console.log(array3);

//There are many methos for manipulate an array like 


//Map, for each element you can do something in a callback

console.log("Map method:")
array.map( item =>{
    console.log(item);
});

//Filter some item

console.log('Filter method:');
const dato1 = array.filter( item => item === 5);
console.log(dato1);

//Browser in an array 

console.log("Find method:");
const busqueda = array.find( item => item===1);
console.log(busqueda);


//Find the index of an specific element 

console.log('Find Index:');
const busqueda2 = array.findIndex(item => item === 2);
console.log(busqueda2);

//Some methotd return a boolean if the conditions pass 

console.log('Some method:');
const some = array.some( item => item > 6);
console.log(some);

//Transform an string from array 
console.log('Convert an string to array:');
let name = "Luis Fernando";
const arrayName = name.split(" ");
console.log(arrayName);

//Transform an array to a string 
console.log('Convert an array to a string:');
name = arrayName.join(' ');
console.log(name);


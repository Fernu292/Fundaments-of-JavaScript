
//For take an input from user in Node we have to import promp function 
//we impor promp like this 
//In the DOM only use prompt
const promp = require('prompt-sync')();


//Then declare a variable for save the input
let nombre;


//Save the name of user in variable 
nombre = promp('Put your name here: ');


//Show the result with template string 
console.log(`Hi ${nombre}, good morning`);
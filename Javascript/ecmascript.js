//Constants
console.log("Constants: ")
const newFunction=function(){
    const define=3;
    define=define+3;  // gives an assignment error
    console.log(define);
}
//newFunction(4)

const newObject={
    name:"Rithika",
    age:"22",
};
newObject.city="Namakkal" // add new property
newObject.name="Raj" // modify exisiting property
console.log(newObject);

const array=["Blue","Brown","Black"]; // loops through a constant array
for (const element of array){
    console.log(element);
}

// Scoping
console.log("");
console.log("Scoping: ");
var number1=20;
if(number1==20){
    let number2=30;
    console.log(number2);
    console.log(number1);//number1 have global scope
}
console.log(number1);
//console.log(number2);//number2 only have block scope
let age=22;
const scopeFunction=function(){
    let name="Rithika"
    console.log(name);//function scope
    console.log(age); //global scope
}
scopeFunction();
//console.log(`I am ${name}`); //name cannot be accessed outside the function


//Arrow function
console.log("")
console.log("Arrow functions: ")
const newNumber=()=>{
    console.log("Hi, Welcome!");
}
newNumber(); // Without parameter

const firstNumber=(number1,number2)=>{
    console.log(number1+number2);
};
firstNumber(10,20); //With parameter

//Extend parameter handling
console.log("");
console.log("Extend parameter handling: ");



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
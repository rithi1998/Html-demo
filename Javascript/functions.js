// function number(n1,n2){
//     return n1*n2;
// }

// let result=number(4,8);
// console.log(result);





// let userName="Rithika"
// let wish="Greetings"

// function define(user){
//     if(user==="Rithika"){
//         return wish;
//     }
// }
// let result1=define(userName);
// console.log(result1);

//function expression
console.log("Function expression:");//without function name
let myFunction=function(name){
    return (`Hi, my name is ${name}`);
}

//const myName=myFunction("Rithika");
console.log(myFunction("Rithika"));

//function declaration
console.log("");
console.log("Function declaraation: ");
function print(name){
    return (`Hi, my name is ${name}`);
}
console.log(print("Rithika"));

//arrow functions
console.log("");
console.log("Arrow functions: ");//function expression
let newFunction=(name)=>{
    return (`Hi, my name is ${name}`);
}
console.log(newFunction("Raj"));

//
console.log("");
console.log("Immediately Invoked Function Expression: ");//executed immediately after it is defined
(function(){
    console.log("Welcome");
})();


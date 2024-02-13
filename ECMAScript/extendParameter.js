console.log("Default parameter:");
//default parameter
function add(number1,number2=50){
    let sum=number1+number2;
    console.log(sum);
}
add(10,20);
add(40);


//rest parameter
console.log("");
console.log("Rest parameter:");
function add(...numbers){
    let sum=numbers.reduce((accumulator,currentValue)=>accumulator+currentValue);
    console.log(sum);
}
add(1,2,3);
add(1,5,9,3,10);


function Newname(firstName,lastName,...titles){
    console.log(firstName,lastName,titles[0],titles[1]);
    console.log(titles);
    console.log(titles.length);
    
}
Newname("Rithika","Murugesan","welcomes","you");//stores the excess data as array

//spread operator
console.log("");
console.log("Spread operator:")
let array1=[10,20,30];
let array2=[1,2,3,50];
console.log(Math.max(...array1));//max of array1
console.log(Math.max(...array1,...array2));//max of array1 and array2
let combine=[...array1,...array2];
console.log(combine);//combine both arrays as arrays
console.log(...array1,...array2);//combine the elements

let newString="Rithika";
console.log([...newString]); //string to array
console.log(Array.from(newString));
//copy array or objects
let array3=[...array1];
console.log(array3);//array to parameters and then to array
console.log(JSON.stringify(array1)===JSON.stringify(array3));//true
console.log(array1===array3);//false
//array1=array3;
array3.push(40);//change only array3
console.log(array1);
console.log(array3);

let object1={ name:"Rithika",age:22};
let object2={...object1};
console.log(object2);
object2.city="namakkal";
object1=object2;
console.log(object1);
console.log(object2);

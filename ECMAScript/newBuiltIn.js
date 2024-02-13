let array1=[10,20,30]
//console.log(array1.includes(10));
const newArray=array1.entries();
for(const val in newArray){
    console.log(val);
}

let object1={
    name:"Rithika",
}

let object2={
    age:22,
    city:"Namakkal",
}

console.log(Object.assign(object1,object2));


let string1="Hello World"
console.log(string1.repeat(3));

console.log(Number.isInteger(145));
console.log(Number.isInteger("Rithika"));
console.log(Number.isNaN(NaN));

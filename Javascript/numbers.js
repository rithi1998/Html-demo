let num1= 3;    //int
let num2= 5.15;   //float

console.log(typeof num1);
console.log(typeof num2);

let num3=1e6; //1000000 = 1*(10**6)
console.log(num3);

let num4=1e-5; // 0.00001
console.log(num4);


const pi=3.145628;
let number1=pi.toFixed(3); // returns the number with the specified decimal 
console.log(number1);
let number2=pi.toPrecision(4); // returns the number with specified number of digits irrespective of decimal point
console.log(number2);

let number3=pi.toExponential();
console.log(number3);

console.log(pi.toString());

let x = BigInt(999999999999999);
let type = typeof x;
console.log(type);


console.log(typeof null);
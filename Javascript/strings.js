const string1="Rithika";
const string2="Murugesan";

console.log(string1 +" "+ string2); // concatenation
console.log(string1.concat(string2));


let guestList = `Guests:  
 * John
 * Pete
 * Mary
`; // backtick for multiline

console.log(guestList);

let guestList1 = "Guests:\n * John\n * Pete\n * Mary\n";
console.log(guestList1); //multiline in double quotes

console.log(string1.length); //string length


const greeting = `Hello, ${string1}`;
console.log(greeting); // backtick for embedding


// quoted strings
let string3='Hello "I like mango"';
console.log(string3);
let string4=`Hello "I'm fond of chocaltes"`;
console.log(string4);

// numbers and strings
let number=123;
console.log(number + string1);

let number1="45" // change string to number and add
let str=Number(number1);
console.log(number+str);

let str1=String(number);// change number to string and concatenate
console.log(number1+str1);


// getting a character
console.log(string1[1]);
console.log(string1.charAt(1));
console.log(string1[string1.length -1]); // character from last

//changing to uppercase and lowercase
console.log(string1.toUpperCase());
console.log(string2.toLowerCase());
console.log(string2[0].toUpperCase());//only one character


//finding the osition of the string
let string5="Widget with id";
console.log(string5.indexOf('Widget'));
console.log(string5.indexOf('With'));
let firstoccurence= string5.indexOf('id');
console.log(firstoccurence);
console.log(string5.indexOf('id',firstoccurence+1)); // starts searching from second position

// checks string contains substring
console.log(string5.includes('with'));
console.log(string5.startsWith('with'));
console.log(string5.endsWith('id'));

//extract substring from string
console.log(string5.slice(2));
console.log(string5.slice(2,6));
console.log(string5.slice(-5));

//replacing/update the string
console.log(string5.replace('with','this'));//replace the first occurence
console.log(string5.substring(3,8));










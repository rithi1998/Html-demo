//Array destructuring
console.log("Array destructuring: ");

// let array1=["Rithika","Murugesan"];
// let[firstName,lastName]=array1;         //arrays
// console.log(firstName);
// console.log(lastName);

let[firstName,lastName]="Rithika Murugesan".split(' ');
console.log(firstName);
console.log(lastName);


let user={};
[user.name,user.surName]="Rithika Murugesan".split(' ');//objects
console.log(user.name);
console.log(user.surName);

var user1={
    name:"Rithika",
    age:22,
}
for (let [key, value] of Object.entries(user1)) {
    console.log(`${key}:${value}`); // name:Rithika,age:22
  }

//Swapping
let name="Raj"
let age=24;
[name,age]=[age,name];
console.log(`${name} ${age}`);

//...rest
let array1=["Rithika","Murugesan","Raj","Siva","Sakthi"];
let[newName,newLastname,...titles]=array1;
console.log(newName);
console.log(newLastname);
console.log(titles);

//object destructuring
let object={
    newName:"Rithika",
    newAge:23,
    city:"Namakkal",
}
let {newname,newAge,city}=object;
console.log(newName);
console.log(newAge);
console.log(city);

//using ...rest
let object1={
    student:"Shiva",
    marks:397,
    school:"Surabi",
    native:"Madurai",

};
let{student,marks,...rest}=object1;
console.log(student);
console.log(marks);
console.log(rest);


//nested destructuring
let object3={
    userName:"Rithika",
    marks:[40,67,89,45,86],
    favourite:{
        color:"blue",
        bird:"peacock",
    }

}
let{
    userName,
marks:[marks1,marks2,marks3,marks4,marks5],
favourite:
color,
bird}=object3;
console.log(userName);
console.log(marks1);
console.log(marks2);
console.log(color);
console.log(bird);






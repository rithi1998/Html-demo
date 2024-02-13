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
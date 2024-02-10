/*function userName(name){

    const obj1={};
    obj1.name=name;
    obj1.age="22";
    return obj1;
    } // object created using object literal
    
const person1=userName("Raj");
person1.name;
person1.age;*/



function userName(name){
    this.name=name;
    this.age="22";
    }
    
const person1= new userName("Raj"); // to call userName new is used
person1.name;
person1.age;
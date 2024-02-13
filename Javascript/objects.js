// dot notation

const person = {
    name: ["Bob", "Smith"],
    
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };

  // setting object
  const person1={
    userName:["Rithi","Raj"],
    age: 25,
  }

  const myheightName="height";
  const myheightValue="1.65m";
  person1[myheightName]=myheightValue;
  function property(propertyName){
    console.log(person1[propertyName]);// bracket notation
  }
  property("userName");
  property("age");

// new keyword constructor
  function Newperson(name){
    this.name=name;
    this.self=function(){
      console.log(`I'm ${this.name}.`);

    };
  }
  const david=new Newperson("David");
  david.name;
  david.self();

  const john=new Newperson("John");
  john.name;
  john.self();


  obj1={
    name:"Mohamed",
  }

  obj2=obj1
  obj2.name="Yasin"
  console.log(obj1,obj2)

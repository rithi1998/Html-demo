//inheritance

class introduction{
    constructor(name){
        this.name=name;
    }
    newFunction(){
        console.log("I am Rithika");
    }

}
class define extends introduction{
    intro(){
        super.newFunction();
        console.log("Welcome to the world "+this.name);
    }

}
let object=new define("Siva");
object.intro();


    




//using constructor
class student{
    constructor(name,marks,grade){
        this.name=name;
        this.marks=marks;
        this.grade=grade;
    }
    increasegrade(){
        this.grade+=1;

    }
}
const newStudent=new student("raj",465,8);
newStudent.increasegrade();
console.log(newStudent.grade);
console.log(newStudent.marks);
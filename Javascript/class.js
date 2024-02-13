class Introduce{
    username='Rithika';
    print(){
        console.log(username);
    }
}

let newobject= new Introduce();
newobject.username='Raj'
console.log(newobject.username)



class Employee{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }

    displayEmployee(){
        console.log(`Employee: ${this.name}`);
        console.log(`Id: ${this.id}`);
    }
}

const employee1=new Employee("Rithika",11563);
const employee2=new Employee("Raj",11854);



employee1.displayEmployee();
employee2.displayEmployee();

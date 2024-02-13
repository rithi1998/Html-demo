class Person{
    constructor(name,aadharNo){
        this._name=name;
        this._aadharNo=aadharNo;
    }
     getName(){
        return this._name;
     }
     getAadharNo(){
        return this._aadharNo;
     }
     setName(name){
        this._name=name;
     }
     setAadharNo(aadharNo){
        this._aadharNo=aadharNo;
     }
     greetings(){
        console.log(`Hi this is ${this._name} and my aadhar no is ${this._aadharNo}`);
     }
}
const person = new Person("Lia", 1233562788282);

console.log(person.getName());
console.log(person.getAadharNo());
person.greetings();

person.setName("Riya");
person.setAadharNo(1223636611717);
person.greetings();
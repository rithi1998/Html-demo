/*const firstperson={
    greet(){
    console.log("Greet");
    },
    
};

const define=Object.create(firstperson);
define.greet();*/


let user={
    name:"new user",

    set setName(value){
        this.name=value;
    },

    get getName(){
        return this.name;
    }
};


let admin={
    __proto__:user,
    isAdmin:'true'
};
admin.setName="Admin"
console.log(admin);
console.log(user);

let vegetables=["carrot","beetroot","potato"];
let favourite="My favourite vegetables are ";
for(const element of vegetables){
    favourite+=`${element}, `;

}
console.log(favourite);// for..of - iterates though values of objects

for(let i=0;i<vegetables.length;i++){
    if(i===vegetables.length -1){
    favourite+=`and ${vegetables[i]}. `;
    }
    else{
    favourite+=`${vegetables[i]}, `;
    }
}
console.log(favourite);//for

let k=0;
while(k<vegetables.length){
    if(k===vegetables.length -1){
        favourite+=`and ${vegetables[k]}. `;
        }
        else{
        favourite+=`${vegetables[k]}, `;
        }
    k++;
}
console.log(favourite);//while


let j=0;
do{
    if(j===vegetables.length -1){
        favourite+=`and ${vegetables[j]}. `;
        }
        else{
        favourite+=`${vegetables[j]}, `;
        }
    j++;
}while (j<vegetables.length);

console.log(favourite); //do..while
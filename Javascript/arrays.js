let favColors=["red","blue","green"];//creating an array
console.log(favColors);
console.log(favColors.length);// array length

//modifying array
favColors[0]= "yellow";
console.log(favColors);
console.log(favColors[1]);
console.log(favColors[favColors.length-1]); // last element

//concat
let array1=[1,2,3]
let array2=[4,5,6]
let result=array1.concat(array2)
console.log(result);

//slice
let array3=[1,2,3,4,5,6,7,8]
let result1=array3.slice(-3)
console.log(result1);
array3.reverse()
console.log(array3)

//multidimensional array
let multi_array=["red","green",132,[10,6,4]];
console.log(multi_array[3][1]);

//index
console.log(favColors.indexOf("blue"));
console.log(favColors.indexOf("red"));
//includes
console.log(favColors.includes("blue"));

// adding new item
favColors.push("black")
console.log(favColors);
favColors.unshift("lavendar");//add items at the start of array
console.log(favColors);

//splice
favColors.splice(2,0,"a","s")//add and delete elements at the same line
console.log(favColors)


//removing item
favColors.pop();//delete last item
console.log(favColors);
favColors.shift(); //delete first item
console.log(favColors);
favColors.splice(1,1); // delete item at specified index and how many items to delete from the index
console.log(favColors);

//accessing every item
//for...of

let vegetables=["carrot","beetroot","potato"]; // access every item
for(const element of vegetables){
    console.log(element)
}

//map - call function to each item and stores the result in a new array
let number1=[1,3,5,6];
let newnumber=number1.map(multiply);
function multiply(number){
    let mul=number*2;
    return mul;
}
console.log(newnumber);

//filter- filters the item that satisfies the condition into a new array
let cities=["London", "Liverpool", "Totnes", "Edinburgh"]
let town=cities.filter(mycity);
function mycity(city){
    return city.length >8;
}
console.log(town)

//converting string to array
const city="Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"
const data=city.split(',') //split
console.log(data);
console.log(data.length);

// converting array to string
const city1=data.join(',')//join
console.log(city1);

const city2=data.toString() //tostring
console.log(city2);

let array4=["India","Asutralia","America","France"]
array4.forEach((item,index,array4)=>{
    console.log(`${item} is at ${index} in ${array4}`)

})
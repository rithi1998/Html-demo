const newArray=new Int8Array([10,30,40,20]);
newArray.sort();
console.log(newArray);

const newArray1=new Uint8Array(['Hi','Welcome','!']);
const filterArray=newArray1.filter(str=>str.includes('o'));
console.log(filterArray);
const data1=require('./objectProblemsset2.json')

//filter the student whose average is greater than 40
console.log("Student whose average is greater than 40")
const averageData=data1.filter(data =>{
    const sum=data.marks.reduce((accumulator,currentValue)=>{
        return accumulator +currentValue;
    },0);
    const average=sum/data.marks.length;
    return average>40;
});
console.log(averageData);

// //filter the student who got pass mark in all the subjects (pass mark 30)
console.log("");
console.log("Student who got pass mark in all the subjects (pass mark 30)")
const passMark=data1.filter(data=>{
    return data.marks.every(data=> data>=30);
});
console.log(passMark);


// //filter the student who got pass mark in all the subjects and whose parents are not-educated
console.log("");
console.log("Student who got pass mark in all the subjects and whose parents are not-educated")
const parent=data1.filter(data=>{
   return  (data.marks.every(data=>data>=30)&& data.parents_details.parents_qualification ==="non-educated");
});
console.log(parent);

//Find the student who got top most mark irrespective of all the subject and whose parents are not educated
console.log("");
console.log("Student who got top most mark irrespective of all the subject and whose parents are not educated");
let highMark=0;
let student="";
data1.forEach(data=>{
    const sum=data.marks.reduce((accumulator,currentValue)=>{
        return accumulator +currentValue;
    },0);
    if((sum>highMark)&& (data.parents_details.parents_qualification==="non-educated")){
        highMark=sum;
        student=data;
    }

})
console.log(student)



//Find the student who got top most mark irrespective of all the subject in tamil medium
console.log("")
console.log("Student who got top most mark irrespective of all the subject in tamil medium")

let highMark1=0;
let student1="";
data1.forEach(data=>{
    const sum=data.marks.reduce((accumulator,currentValue)=>{
        return accumulator +currentValue;
    },0);
    if((sum>highMark1)&& (data.medium==="tamil")){
        highMark=sum;
        student=data;
    }

})
console.log(student);

//Find the no of the students passed: pass mark (30)
console.log("");
console.log("Find the no of the students passed: pass mark (30)")
let count=0;
data1.forEach(data=>{
    if(data.marks.every(data=> data>=30)){
        count++;
    }
})
console.log(count);


//Display sundar's 4th subject mark
console.log("")
console.log("Display sundar's 4th subject mark")
const markSundar=data1.find(data=>{
    return data.name==="sundar"
});
if(markSundar){
    const fourthSubjectMark=markSundar.marks[3];
    console.log(fourthSubjectMark);
}


//Display 2nd subject mark of the student whose father name is "Rajeev"
console.log("")
console.log("Display 2nd subject mark of the student whose father name is Rajeev")
const fatherName=data1.find(data=>{
    return data.parents_details.father_name==="rajeev"
});
if(fatherName){
    const secondMark=fatherName.marks[1];
    console.log(secondMark);
}

//Display students name whose father names are same
console.log("")
console.log("Display students name whose father names are same")
const fatherNames=data1.map(data=> data.parents_details.father_name);

const repeatedNames=fatherNames.filter((name,index,array)=>array.indexOf(name)!==index);

const studentName=data1.filter(data=>
    repeatedNames.some(name=>data.parents_details.father_name===name)).map(data=>data.name);
console.log(studentName);


//Display students name whose father name ends with h
console.log("")
console.log("Display students name whose father name ends with h")
const fatherNamesEndWithH=data1.filter(data=>
    data.parents_details.father_name.endsWith("h")).map(data=>data.name)

console.log(fatherNamesEndWithH)

//Delete the student from the array who got less than 30 in the second subject
console.log("")
console.log("Delete the student from the array who got less than 30 in the second subject")
const newArray=data1.filter(data=> data.marks[1]>=30)
console.log(newArray);
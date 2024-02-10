const datas=require('./objectProblems.json')


//both mark should be more than 60
console.log("Both mark should be more than 60: ")
const requiredData=datas.filter(data=>{
    return Number((data.academics.sslc))>60 && Number((data.academics.hsc))>60;
});
console.log(requiredData);


//average should be 60
console.log("");
console.log("Average should be 60: ")

const average=datas.filter(data=>{
    return Number((data.academics.sslc)+(data.academics.hsc))===60;

});
console.log(average);


//Should double and display age who got more than 60 as average
console.log("");
console.log("Should double and display age who got more than 60 as average: ")
const averageData=datas.filter(data=>{
    return ((Number(data.academics.sslc)+Number(data.academics.hsc))/2>60)
});

averageData.forEach(data=>{
    const averageMarks= (Number(data.academics.sslc)+Number(data.academics.hsc))/2;
    if(averageMarks>60){
        data.age=(Number(data.age)*2).toString();
    }
})
console.log(averageData);



// Total the sslc mark and display who got more than 60 as avereage
console.log("");
console.log("Total the sslc mark and display who got more than 60 as average: ");
const averageData1=datas.filter(data=>{
    return ((Number(data.academics.sslc)+Number(data.academics.hsc))/2>60);
});
console.log(averageData1);

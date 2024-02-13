
const newFunction=(callback)=>{
    const newRequest=new XMLHttpRequest();

newRequest.addEventListener('readystatechange',()=>{
    //console.log(newRequest,newRequest.readyState); //(3)
    if(newRequest.readyState===4 && newRequest.status===200){
        const data=JSON.parse(newRequest.responseText)
        callback(undefined,data);// returns array of js objects
    }
    else if(newRequest.readyState===4){
        callback('could not fetch',undefined);
    }


})
newRequest.open('GET','/Javascript/objectProblemsset2.json'); // setting up request(1)
newRequest.send(); //send the request(2)

}

newFunction((err,data)=>{
    console.log('Callback fired');
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
    
});

console.log(1);
console.log(2);

newFunction((err,data)=>{
    console.log('Callback fired');
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
    
});

console.log(3);
console.log(4);



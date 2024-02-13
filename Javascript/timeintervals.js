let newTime=setTimeout (function(){
    console.log("Welcome");
},10000);

//clearTimeout(newTime);// clear timeout and didn't login to the console

// setImmediate(function(){
//     console.log("How are you?");
// });



var interval=setInterval(function sayHi(){
    console.log("Hi,Welcome");
},2000);

setTimeout(function(){
    clearInterval(interval);
    console.log("Interval cleared");

},6000);

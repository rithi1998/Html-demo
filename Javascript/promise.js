

const promiseNew=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let success=true;
        if(success){
            resolve("Welcome to the new world");
        }
        else{
            reject(new Error ('Failed to execute'));

        }
    },2000);
})


promiseNew.then((value)=>{
    console.log(value);
})
.catch((err)=>{
    console.error(err);
});



async function HotelBooking() {
 
    let BookHotel = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Please proceed to payment")
        }, 2000)
    })
 
    let Payment = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("payment done")
        }, 4000)
    })
    // BookHotel.then((value)=>{
    //  console.log(value)
 
    // })
    // Payment.then((value)=>{
    //  console.log(value)
 
    // })
 
    console.log("Loading please wait....")
    let hotelB = await BookHotel
    let hotelP = await Payment
    console.log("waiting for payment")
    return (hotelB,hotelP)
}
 
let answer = HotelBooking()
console.log(answer)
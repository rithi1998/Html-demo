const object={
    name:"Rithika",
    age:23,
    address:{
        street:"5/89, Bharathi nagar",
        city: "Madurai",
        geo:{
            latitude:45.798,
            longitude:35.675,
        }
    }
}
const lat=object.address?.geo.latitude;

console.log(lat);
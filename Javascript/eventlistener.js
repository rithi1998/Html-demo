const grandparent=document.querySelector(".container")
const parent=document.querySelector(".item")
const child=document.querySelector(".box")

grandparent.addEventListener("click",e =>{
    console.log("Container")
})

parent.addEventListener("click",e =>{
    console.log("Item");
},{capture: true})

child.addEventListener("click",e =>{
    console.log("Box")
})
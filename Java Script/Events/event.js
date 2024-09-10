
   let Count1 = document.querySelector(".count");
   Count1.onclick=(evt) =>{ // use of event object and its function
     console.log(evt);
     console.log(evt.target);
     console.log(evt.type);
     console.log(evt.clientX);
     console.log(evt.clientY);
   } 
   // as if we repeat this same code above again we will face error so we 
   // use event listeners
   // example
 

Count1.addEventListener("click" , ()=>{
    console.log("Handler 1");
})
Count1.addEventListener("click" , ()=>{
    console.log("Handler 2");
})
let handler3 = ()=>{
    console.log("Handler 3")
}
Count1.addEventListener("click" , handler3)
Count1.addEventListener("click" , ()=>{
    console.log("Handler 4");
})
//to use remove event listner to and use callbacks to
// let first give it a const variable so that it can be called

Count1.removeEventListener("click" , handler3);

//practice question
let colorchange = document.querySelector(".colorchnge");

let currMode = "dark" ;
colorchange.addEventListener("click" , ()=>{
    if (currMode == "light") {
       currMode ="dark";
document.body.style.backgroundColor = "black";
document.body.style.color = "white";
    }
    else if(currMode == "dark"){
       currMode =  "light";
       
document.body.style.backgroundColor = "white";
document.body.style.color = "black";
    }
    else(
     console.log("none")
    )
    console.log(currMode)
})


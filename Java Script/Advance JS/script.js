// let h1 = document.querySelector("h1")
// let start =document.querySelector("#start")
// let stop =document.querySelector("#stop")
// let body = document.querySelector("body")
//  setInterval And clearInterval
// let greet 
// console.log("Before Starting");
// start.addEventListener("click", function(){
//     h1.innerText = "Started"
//     greet =setInterval(function(){
//         console.log("Hello Duniya");
//     }, 1000);
// })
// stop.addEventListener("click" , function(){
//      h1.innerText = "Stopped"
//   clearInterval(greet)
// })

// Random color change
// let interval 
// function randomColor(){ 
// let hex = "0123456789ABCDEF"
// let color = "#"
// for (let i = 0; i < 6; i++) {
//    color +=hex[Math.floor(Math.random()*16)]
// }
// return color
// }
// start.addEventListener("click", function(){
//     h1.innerText = "Started"
//     interval= setInterval(() => {
//      body.style.backgroundColor = `${randomColor()}` 
//   }, 3500);
// })
// stop.addEventListener("click" , function(){
//          h1.innerText = "Stopped"
//       clearInterval(interval)
//       interval = null;
//     })


// how prompt is given more priority that setimeout function
// setTimeout(() => {
//    console.log("Timeout...");
// }, 5000);

// for (let index = 0; index <10; index++) {
//    console.log(index);
// }

// let vari =prompt("Print the statement: ")
// setTimeout(() => {
//    console.log(vari);
// }, 1000);

//promise creation - after new promise two params are expected one param for sucess and other for error here we have given a setimeout function example on how the promise is invoked and used
// function hey() {
//    return new Promise((resolve , reject)=>{
//       setTimeout(() => {
//          let data = true;
//          if (!data) {
//             resolve("Data Fetched....")
//          } else {
//             reject("error occured")
//          }
//       }, 3000);
//    })
  
// }
//promise consumption
// let heee = hey()
// data = false
// console.log(heee);
// heee
//    .then((data)=>{console.log(data);
//    })
//    .catch((err)=>{console.log(err);
//    })

// o/p
// Promise { <pending> }
// error occured
// [Done] exited with code=0 in 3.147 seconds
 

// THIS context

const person = {
   name : "Rahul",
 greet(){
 console.log(`Hi my name is ${this.name}`);
 }
}
// console.log(person.greet());


// let someone = person.greet.bind({name:"Situ"})

// console.log(someone());

// console.log([1,2].map(num =>{
//   if (num<0) return ;
//   return num *2;
// }));

{
  function hey(){
    console.log("Hello");
    
  }
}
hey()
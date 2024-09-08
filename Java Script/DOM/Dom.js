let heading = document.getElementById("head");
 console.log(heading.tagName);
//! Dom  is  just about how do i acess the html elements in js the above is an 
// example
let headi = document.querySelector(".headi");
console.dir(headi.tagName); // shows the name of the elemnet of that class
let div = document.querySelector(".inner");
console.log(div.innerHTML);
console.dir(div.innerText);
//div.innerText try this in the insoect window you will see
//the diffrence in thier opening
console.log(div.textContent)
// these above are the varioius properties  
// also we can change the inner text contnet using this
div.textContent = "Sorry The Content is no more avialiable";
// see how there is no changes in your html yet the .inner div is discarded
div.innerHTML = "<h1>If this shows that means we can also write html tags inside innerHTML</h1>";
// PRACTICE QUESTION
//create H2 element with text "".append "" to this text
let txt1 = document.querySelector(".text1");
txt1.innerText = txt1.innerText+" " + "this is Rahul Kumar Parida";
// Q2.create  3 divs with common clssname "box" . access them  and add      
//  some unique texteach of them
let box = document.querySelectorAll(".box");
console.log(box);
// box[0].innerText = "Hii!";
// box[1].innerText = " there ";
// box[2].innerText = " Situ here";

//* optimized way 
index=1;
for (boxes of box) {
    boxes.innerText =`Hii this is the ${index} position good to see you after such a long time `
    index++;
}
//*let see get and set attribute property in js


 let cube = document.querySelector("#cube");
 console.log(cube);
  let id = cube.getAttribute("id");
  let name = cube.getAttribute("name");
  console.log(id);
   // this is to get attribute
console.log(name);
console.log(cube.setAttribute("name" , "GetCube")); 
// this is how to set attribute or change values

// node.style
 let divboxx = document.querySelector(".boxx");
 divboxx.style.backgroundColor = "pink";
 divboxx.style.color = "red"; // this is how we can change the properties using node.style in js


 //* this is how we can access , create , add a new element in page in js  
 let newbtn = document.createElement("button");
 newbtn.innerText = "Clik here";
 let newbtn2 = document.createElement("button");
 newbtn2.innerText = "Clik me";
 console.log(newbtn2);
 let btn = document.querySelector("#btn");
 btn.append(newbtn); // this  adds button affter everything is displayed
 btn.prepend(newbtn2);// this adds button before anythis is displayed in that container
 btn.before(newbtn2); // this shows that it shows the button on top of the container
 btn.after(newbtn); // this shows the button on the bottom outside the container 
 // this is how we delete or remove a part in js (you have to acces it first i have acessed it above so i can rightit  like this without error)
divboxx.remove();

// ===== PACTICE QUESTION ======
// create btn give text click^--^me give it bgm of red and text color white
let newbutton = document.createElement("button");
newbutton.innerText = "click^--^me";
newbutton.style.backgroundColor = "red";
newbutton.style.color = "white";
document.body.prepend(newbutton); // look on the top of the page

// create p tag give some style the give it a class then create a new class in CSS and try to change the class using js (attributes) 
let paragraph = document.querySelector(".para");
paragraph.getAttribute("class");
// paragraph.setAttribute("class","newpara");
// did you see how it overrideed the old class to let them have the properties of both the classes we ue class list
paragraph.classList;
console.log(paragraph.classList)
paragraph.classList.add("newpara"); // see now we can access bothe properties of diffrent class using one simple line 
// paragraph.classList.remove("para");
// this above commmaned removes the the class with it's classname
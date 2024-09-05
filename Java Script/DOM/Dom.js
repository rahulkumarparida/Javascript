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
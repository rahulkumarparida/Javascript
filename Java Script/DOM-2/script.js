// Accesing the element 
let p = document.querySelector("#line")
let Btn = document.querySelector(".btn-1")
Btn.addEventListener("click",function(){
    p.textContent = "Hello!!"
})

// Traversing the elements
let CityName = document.querySelector(".cityname")
let Btn2 = document.querySelector("#btn-2")
Btn2.addEventListener("click", function() {
    console.log(CityName.firstElementChild.classList)
    CityName.firstElementChild.classList.add("highlight")
    
})


//Manipulating DOM elements

document.querySelector(".CHangeOrder").addEventListener("click", function() {
    document.querySelector(".Cofee_type").textContent = "Black Coffee"  
})

//Creating and Inserting Element 
document.querySelector(".NewTem").addEventListener("click",function(){
    let newItem = prompt("Enter the new item: ")
    let newproduct = document.createElement("li")
    newproduct.textContent = newItem
    document.querySelector(".lists").appendChild(newproduct)
})

//Removing the Dom elements

document.querySelector(".NewIttem").addEventListener("click", function(){
    let list = document.querySelector(".lists")
    list.lastElementChild.remove()
})

// Event Handling in Dom

let HandleButton = document.querySelector(".bttn")
let HandleDiv = document.querySelector("#Handle")
HandleButton.addEventListener('click', function(){

    HandleDiv.innerHTML = 
    `
    <h1>Hello From Rahul</h1>
    `
})
HandleButton.addEventListener('dblclick', function(){
   HandleDiv.style.backgroundColor = "cyan"
})

//Event delegation

let CofeeIng = document.querySelector("#cofeelist").addEventListener("click" , function (event) {
    if (event.target && event.target.matches(".Coffeeitem")) {
       console.log(event);
       console.log(event.target);
       console.log(event.target.matches(".Coffeeitem"));
        //event parameter gives you the attribute of the clicked event and target atrribute is one of them which targets on the clicked elements
    }  
})

// Form Handaling
document.querySelector("#Feedback").addEventListener("submit", function(e){
 e.preventDefault();
 let FeedInput = document.querySelector("#FeedbackInput")
 let feedbackMsg = FeedInput.value
 let displayFeed = document.querySelector(".disp")
 let label = document.querySelector("label")
if (feedbackMsg !== "") {
    console.log(feedbackMsg);
    displayFeed.textContent = feedbackMsg
    document.querySelector("#FeedbackInput").textContent.remove
    console.log(label.htmlFor);//aceesss the label for the first label element 
    
}else{
    throw new Error("Please add a text to the feedback form "); 
}
})

//DOM content Loaded 
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("domStatus").textContent = "The Dom has been loaded completely"
    
})

//CSS classes Manipulation

let buttont = document.getElementById("btn-3")

buttont.addEventListener("click",function() {
    let para =document.getElementById("description")
        para.classList.toggle("highlight")
})

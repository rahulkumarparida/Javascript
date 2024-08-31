{
  
  console.log("----------Lecture 3----------");
 // loops in js
  // example if i have to  print hello wrorld 10 times
  for(i= 1; i<=10;i++){
    console.log("Hello wrold ");
  }
  factorial
  let num =5;
  let fact=0;
  for(let i = 0; i<=num;i++){
    
    fact = fact +i;
  }
  console.log(fact);
  //learned a new loop of for-of loop which helps to mak eloop for string type and  arrays
  example
  let name = "Rahul";
  for(let i of name){
    console.log(i) // it checks and print each string value 
  }  
// learned anothe new loop of for-in loop which helps to make loop for objects and arrays
// example
let student = {
    myName:"Rahul",
    age :20,
    cgpa: 9.8,
    ispass :true
 };
 for(let i in student){
    console.log(i , " " , student[i]);
 }
 //print all even number from 0 to 100
 let number = 100;
 for( let i = 0 ; i<= number;i++){
    if (i%2== 0) {
        console.log(i);
    } 
 }
 // create a game  where  you start  with any random  game_ number . Ask the user to keep  guessing  the number until  the user entr correct number
 
 let game_num = 515;
 let  user_num = prompt("Guess the correct number");
 if (user_num > game_num) {
    console.log("Number is smaller then this ;)");
 }
 else if(user_num<game_num){
    console.log("The game number is larger than this :)")
 }
 else{
    console.log("You guessued the correct number")
//  }
//--------------------- after loops strings--------------------------------------!
let id = "Rahul";

console.log(id.toUpperCase() ,
id.length
 , id[2]);
 console.log(id); 
  let obj = {
    item : 'pen' ,
    price : 20,
  };
  // template literals and diffrent methods
  let output = `the price of ${obj.item.toLocaleUpperCase()} is ${obj.price} \nif i want to buy  4 of that would be \t ${obj.price *4}`;
  console.log(output);
  let strmethod = "Rahul always roxx";
  let strTwo = " is true";
  console.log(strmethod.toUpperCase());
  console.log(strmethod.toLocaleLowerCase());
  console.log(strmethod.trim());// removes whitespaces from start and end
  console.log(strmethod.slice(5,18));// we can write position value directly
  console.log(strmethod.slice(9));// we can write starting position value directly that will then print the later all the elements
  console.log(strmethod.concat(strTwo));// join s two strings
  console.log(strTwo.replace("true" , "false"));// changes the string elements
  console.log(strmethod.charAt(0)); // selects the element at the index position
 
 
  // PRACTICE QUESTION
  //Q2. prompt the user to enter thieer full name  . generate a user name of them based on the input . start username with '@'  follwes by thier full nameand enfing with the fullnanme 
  //length.
let nam = prompt("Enter Your Name Please(with no spaces please): ");
let nams = nam.toLocaleLowerCase();
let username=` @${nams}${nams.length}`;
console.log(username);

}
};
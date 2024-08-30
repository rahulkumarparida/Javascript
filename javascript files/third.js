console.log("----------Lecture 3----------");
 // loops in js
  // example if i have to  print hello wrorld 10 times
  for(i= 1; i<=10;i++){
    console.log("Hello wrold ");
  }
  // factorial
  let num =5;
  let fact=0;
  for(let i = 0; i<=num;i++){
    
    fact = fact +i;
  }
  console.log(fact);
  // learned a new loop of for-of loop which helps to mak eloop for string type and  arrays
  // example
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
 // print all even number from 0 to 100
//  let number = 100;
//  for( let i = 0 ; i<= number;i++){
//     if (i%2== 0) {
//         console.log(i);
//     } 
//  }
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
 }

console.log("Second Lecture starts form here");
console.log("--------------Lecture 2 --------------");
//arithmetic operator
 {
let a=10
let b= 5
console.log("a = ",a , " & b = " , b )
console.log("sum + = ", a+b )
console.log("Multipy * = ", a*b )
console.log("Substract - = ", a-b )
console.log("Divide / = ", a/b )
console.log("Modulus % = ", a%b ) 
console.log("Exponetion ** = ", a**b )// 10^5
};
// comparison 
a= 5
b=10
console.log( " a = ", a," b = ",b);

a===b;
console.log("a===b represents the that the type and the value both are be equal ",a===b);
console.log("a!==b represent that the type and value both are not eoqual", a!==b);
// conditional operator
// can you vote ??
{
let age = 19;
if(age>18){
    console.log("Yes you can vote ")
}
else{
    console.log("You cannot vote")
};
};
//odd or even
{
    let num = 16;
    if(num%2===0){
        console.log(num , " is even  number ")
    }
    else{
        console.log(num , " is odd number")
    }
};
//junior - senior - adult else-if
{
    let age = 16;
    if(age<18){
        console.log("Junior")
    }else if(age >60){
        console.log("Senior")
    }else{
        console.log("Adult")
    }
};
//using ternary operator and taking input  vote or nnot
// Q1. input a age check if he/ she can vote
{
   let age = prompt("Enter the age : ");
    console.log(age)
  console.log(age>=18? "can vote" : "cannot vote")
 
};
//Q2. WAP  to code which give grades to student accordin to score
{
let score= prompt("Enter the score you got :");
 if (score >= 80 && score <= 100) {
    console.log("A")
 }
 else if ( score >= 70){
    console.log("B")

 } 
 else if ( score >= 60){
    console.log("C")

 } 
 else if ( score >= 50){
    console.log("D")

 } 
 
 
 else {
    console.log("You Failed")
    
 }

   
};
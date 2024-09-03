{
 console.log("This is the fifth lecture");

  function myFirst(msg) { // parameter
    console.log("This is my first function");
    console.log("My name is Rahul Kumar Parida ");
    console.log(msg)// call
}
   myFirst("I am Learning JavaScript");// argument

function normalcalc(a, b) {
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
    s = a**b;
    return s;
    
}
normalcalc(3,2);// we write like this we dont get the return value because we havent given the console statement
console.log(normalcalc(3,2));// we get all values including return value

let  ArrowFncCalc=(a ,b) =>{
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
}
ArrowFncCalc(5,2);
// PRACTICE QUESTION 1
// crerate a function that takes string as argument and returns the number of vowels in the  string
console.log("Practice Question===========================>");

function vowels(name) {
    console.log(name);
    let count = 0;
  for (let i = 0; i < name.length; i++) {
 
    if (name[i] === "a" || name[i] ==="e"|| name[i] === "i" || name[i] ==="o" || name[i] === "u") {
        console.log(name[i] , " is a vowel" );
        count++;
    }
   
  }
  console.log(count);
    
}
vowels("Rahul");
// do the same with arrow function
let ArrowVowels=(naam)=>{
    console.log(naam);
    let count = 0;
  for (let i = 0; i < naam.length; i++) {
 
    if (naam[i] === "a" || naam[i] ==="e"|| naam[i] === "i" || naam[i] ==="o" || naam[i] === "u") {
        console.log(naam[i] , " is a vowel" );
        count++;
    }
   
  }
  console.log(count);
    
}

ArrowVowels("Situ");
// for-each loop for array
let name = ["Rahul" , "Situ" , "Shruti" , "Tushar"];
name.forEach((value , index , arr ) => {
    console.log(value ,index , arr); // contains three parameters value , index , array itself
    
});
// parctice question
// for agiven array of numbers , print the square  of each  value using  the for each loop

console.log("Practice Question===========================>");
let num = [1,2,3,4,5,6,7,8,9];
num.forEach(function square(i){ // this foreach value will execute for every element in the array
    console.log("The Square of ",i + " = " + (i*i));
});
 // map in array creates a new array to print the value of after the method is executed on the first array
let number = [9,8,7,6,5,4,3];
let squarenum = number.map((val)=>{
    return val*val;
});
console.log(number);
console.log(squarenum);
// filter :- filters the array with the  given condition
let evenodd = [1,51,66,95,31,46,49,48,35,];
let evenodd_two =evenodd.filter((val) => {
    return val%2!==0;
});
console.log(evenodd);
console.log(evenodd_two);
// reduce :- it reduces valuesinto a single value
let arr = [1,2,4,5,7,8];
const output = arr.reduce((prevVal , CurrentVal)=>{ // the parameter shows the prvious value and current value
    return prevVal + CurrentVal;
})
console.log(output);
// parctice question
console.log("Practice Question===========================>");
// we are given  array of marks of student . Filter out of the marks  of student that scored 90+
{
    let marks = [95,96,85,45,78,63,15,78,99,100];

     let toppers = marks.filter((mark)=>{
        return mark >90 ;
     });
     console.log(toppers);
}

// take a n as input from the user . create an array of number from 1 to n. use reduce to calculate the sum of number
//use rduce to claculate product
{
    let n = prompt("Enter the number");
     let arr =[];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
        
    }
    console.log(arr);
    let sum = arr.reduce((prev , curr)=>{
        return prev+curr;
    });
    console.log(sum);
    let mul = arr.reduce((prev , curr)=>{
        return prev*curr;
    });
    console.log(mul);
}



























}
// // Dark Mode -- Light Mode(Event-listner)
// // 1st
// let button = document.querySelector('.btn');
// let div = document.querySelector('.eventslistner');
// btn = 'light-mode';
// button.addEventListener("click" , ()=>{
//     if (btn == 'light-mode') {
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white'

const { count } = require("console");

        
//         btn = 'dark-mode'
//     }
//     else if (btn == 'dark-mode') {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//         btn = 'light-mode';
//     }
// })
// //2nd
//  let text = 'red'
//  function colorchangeclick(){
   
//      if (text == 'red') {
//         document.body.style.color = 'blue';
//         text = 'blue'
//      }
//      else if(text == 'blue'){
//         document.body.style.color = 'yellow';
//         text = 'yellow'
//      }else if(text == 'yellow'){
//         document.body.style.color = 'green';
//         text = 'green'
//      }else if(text == 'green'){
//         document.body.style.color = 'aqua';
//         text = 'aqua'
//      }else if(text == 'aqua'){
//         document.body.style.color = 'red';
//         text = 'red'
//      }
// }

{



// Practice question

//map
// const newArray = array.map((element, index, array) => {
 // Return the transformed element
//    return element;
// });

//filter
// const newArray = array.filter((element, index, array) => {
 // Return true to keep the element, false to exclude it
//    return element > 0;
// });

//sort
// const sortedArray = array.sort((a, b) => {
  // Return negative if a < b, zero if a === b, positive if a > b
//    return a - b;
// });

//Reduce
// const result = array.reduce((accumulator, element, index, array) => {
 // Process each element and return the new accumulator
//    return accumulator + element;
// }, initialValue);

// 1.Square the numbers: Given an array of numbers, use map to return a new array with each number squared.
{
   let arr = [1,2,3,5,4,8,9,6]
   let sqArr = arr.map(num =>{
      return num*num;
   })
   // console.log(arr);
   // console.log(sqArr);
   }
   
   //2. Capitalize names: Given an array of names in lowercase, use map to capitalize the first letter of each name.
   {
   let name = ["tushar","situ","rahul","siddharth"]
   let CapName = name.map(nm =>{
      return nm.charAt(0).toUpperCase()+nm.slice(1);
   })
   // console.log(CapName);
   }
   
   //3. Double the prices: Given an array of product prices, use map to double each price.
   {
      let arr = [1,2,3,5,4,8,9,6]
   let sqArr = arr.map(num =>{
      return num*2;
   })
   // console.log(arr);
   // console.log(sqArr);
   }
   
   //4.Filter out odd numbers: Given an array of numbers, use filter to return a new array with only the even numbers.
   
   {
      let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
      let Oddnum = num.filter(n =>{
         return (n%2!=0);
      })
      // console.log(Oddnum);
      
   }
   
   
   //5.Filter out short words: Given an array of words, use filter to return a new array with only the words that have more than 3 characters.
   
   {
      let animal= ["dog","cat","turtle","fox","wolf","Hippo"]
      let NewAnimal = animal.filter(n=>{
        
         return n.charAt(3);
      })
      // console.log(NewAnimal);
      
   }
   
   //6. Filter ages greater than 18: Given an array of ages, use filter to get ages greater than 18.
   
   {
      let ages = [10,15,47,45,44,69,32,,5,12,78,45,15]
      let adult = ages.filter(age =>{
         return age>=18;
      })
      // console.log(adult);
      
   }
   
   //7. Sort numbers in ascending order: Given an array of numbers, use sort to arrange them from smallest to largest.
   {
      let number = [565,468,45464,1193,14,6949,564,65458,7,4,6796,6]
      let Sorted = number.sort((a,b) =>{
         return a - b ;
      })
   // console.log(Sorted);
   }
   
   //8. Sort names alphabetically: Given an array of names, use sort to arrange them in alphabetical order.
   
   {
      let names = ["tushar","situ","rahul","siddharth"]
      //By default, sort() arranges strings in ascending alphabetical order.
      let Sorted = names.sort() 
      // console.log(Sorted);
   }
   
   
   //9. Sum of all numbers: Given an array of numbers, use reduce to find the sum of all the numbers.
   {
   let num =[1,2,3,4,5,6,7,8,9]
   let sumall = num.reduce((total , curr)=>{
    return total += curr;
   })
   // console.log(sumall);
   }
   
   //10, Find the longest word: Given an array of words, use reduce to find the longest word in the array.
   {
      const words = ["apple", "banana", "cherry", "blueberry","guava"];
      let reduceWOrd = words.reduce((highVal , Curr)=>{
    
         return Curr.length > highVal.length ? Curr :highVal
       
      })
      // console.log(reduceWOrd);
   }
   
   
   //11. Calculate Total Price of Products: Given an array of product objects, use reduce to find the total price of all products.
   {
      const Product = [
         {
            names:'Shirt',
            price:800
         },
         {
            names:'Jeans',
            price:1500
         },
         {
            names:'Shorts',
            price:300
         }
      ]
      let TotalPrice = Product.reduce((Total , curr)=>{
        Total += curr.price
         return Total
      },0) // always give the initial value to mention the types
      // console.log(TotalPrice);
      
   }
   
   //12. Filter Products by Price: Given an array of products, use filter to return only the products that cost more than $20.
   {
      let Products = [
         {
            name : "Laptop",
            price : 100
         },
         {
            name : "SmartPhones",
            price : 80
         },
         {
            name : "Charger",
            price : 10
         },
         {
            name : "USB Drive(1TB)",
            price : 15
         }
      ]
   let newProducts = Products.filter(p =>{
    return p.price > 20
   })
   // console.log("\n",newProducts);
   
   }
   
   
   //13. Sort Users by Age: Given an array of user objects, use sort to arrange them from youngest to oldest.
   
   {
      let Member = [
         {
            name :"Rahul",
            age:20
           },
           {
            name :"Tushar",
            age:12
           },
           {
            name :"Shurti",
            age:15
           },
           {
            name :"Sheetal",
            age:16
           }
      ]
      let Sorted = Member.sort((a,b)=>{
           
         return a.age - b.age
   
      })
      // console.log(Sorted);
      
   }
   
   //14. Get Names of All Products: Given an array of product objects, use map to create a new array containing only the names of the products.
   
   {
      let Products = [
         {
            name : "Laptop",
            price : 100
         },
         {
            name : "SmartPhones",
            price : 80
         },
         {
            name : "Charger",
            price : 10
         },
         {
            name : "USB Drive(1TB)",
            price : 15
         }
      ]
      let NewProducts = Products.map(nm =>{
         return nm.name;
      })
      // console.log(NewProducts);
      
   }
   
   
   //15.Find the Highest Scoring Student: Given an array of student objects, use reduce to find the student with the highest score.
   {
   let Topper = [
      {
         name : "Tushar",
         marks : 25
      },
      {
         name : "Rahul",
         marks : 85
      },
      {
         name : "Shruti",
         marks : 65
      },
      {
         name : "Sheetal",
         marks : 95
      },
      {
         name : "Lipu",
         marks : 75
      },
   ]
   let nweTopper = Topper.reduce((Total , curr)=>{
      return Total.marks < curr.marks ? curr : Total
   })
   // console.log(nweTopper);
   
   }
   
   
   //Task 1: Using Array Methods
   //Write a function squareNumbers(arr) using map() and arrow functions
   {
      let arr = [10,15,47,45,44,69,32,,5,12,78,45,15]
   
   let squareNumbers = arr.map(a =>{
     
      
      return a*a
   })
   // console.log(squareNumbers);
   
   }
   // Task 2: Custom Filter Function
   // Create a function filterEvenNumbers(arr) using filter() and arrow functions
   {
      let arr = [10,15,47,45,44,69,32,,5,12,78,45,15]
      const filterEvenNumbers = arr.filter(a=>{
         if(a%2==0){
            return a;
         }
      })
      // console.log(filterEvenNumbers);
      
   }
   
   
   
   // Task 3: Sum of Positive Numbers
   // Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions
   
   {
      let arr = [10,-15,-47,-45,-44,69,-32,,5,-12,-78,-45,-15]
      let newArr = arr.filter(num=>{
         if (num > 0) {
         return num
         }
      })
      let sumPositiveNumbers=newArr.reduce((Total , Curr)=>{
         Total= Total +Curr
         return Total
      })
   // console.log(sumPositiveNumbers);
   
   }
   
   
   
   // Task 4: Transform Array of Objects
   // Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions
   
   {
      let Topper = [
         {
            name : "Tushar",
            marks : 25
         },
         {
            name : "Rahul",
            marks : 85
         },
         {
            name : "Shruti",
            marks : 65
         },
         {
            name : "Sheetal",
            marks : 95
         },
         {
            name : "Lipu",
            marks : 75
         },
      ]
      let nweTopper = Topper.map(a=>{
         return a.name
      })
      // console.log(nweTopper);
      
   }
   
   // Task 5: Find the Longest Word
   // Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
   
   {
      const words = ["apple", "banana", "cherry", "blueberry","guava","Strawberry"];
      let reduceWOrd = words.reduce((highVal , Curr)=>{
    
         return Curr.length > highVal.length ? Curr :highVal
       
      })
      // console.log(reduceWOrd);
      
   }
   
   
   // Task 1: Using this in Objects
   // Create an object person with a method introduce() that uses this additionally add properties of name & age that will result in Hi, my name is Hitesh and I am 19.5 years old on calling introduce()
   
   {
      const Person = {
         name:"Rahul",
         age:20,
            introduce(){
               return ("Hi, My name is "+this.name+" and I am "+ this.age+ " years old ")
            }
      }
      // console.log(Person.introduce()); 
   }
   
   
   // Task 2: Function within a function
   // Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer()
   
   {
      function outer() {
         function inner(){
           return "inner function called"
         }
         return inner()
     }
   //   console.log(outer());  
   }
   
   //16. Create a class called Car with properties make, model, and year. Create an object from this class and print the details.
{
      
   class Car{
    constructor(make,model,year){
      this.make=make;
      this.model=model;
      this.year=year;
    }

    getDetails(){
      return `${this.make} ${this.model} ${this.year}`
    }

   }

   const newCar = new Car("Lamborghini","Urus",2017)

   // console.log(newCar.getDetails());
   
   
}

//17.Write a Book class that takes title, author, and pages as arguments in its constructor. Create an instance of Book and log the details of the book to the console.
// AND
//18. Add a method getSummary to the Book class that returns a summary of the book (e.g., "Title by Author has X pages"). Test this method.
{
   class Book{
      constructor(title, author,pages){
         this.title = title;
         this.author = author;
         this.pages = pages
      }

      getData(){
         return`${this.title} ${this.author} ${this.pages}`
      }
      getSummary(){
         return`${this.title} by ${this.author} has ${this.pages} pages`;
      }
   }
   const newBook = new Book("Verity","Collen Hover",215)
   // console.log(newBook.getData());
   // console.log(newBook.getSummary());
   
   
}
//19. Create a base class called Animal with a method makeSound(). Create a subclass Dog that extends Animal and overrides the makeSound() method to return "Woof!". Create an instance of Dog and call makeSound().

{
   class Animal{
      makeSound(){
         return`random`
      }
   }
   class Dog extends Animal{
      makeSound(){
         return "Woof!"
   }   
   }
   const Doggy = new Dog()
   // console.log(Doggy.makeSound());
}
//20.Create a BankAccount class with a private property balance. Add methods to deposit money, withdraw money, and checkBalance. Ensure that balance can only be modified through these methods.
{
   class Bankname{
      constructor(name ,accountNum, money) {
         this.name = name;
         this.accountNum = accountNum;
         this.money = money;
      }
      deposit(amount){
        return this.money =  this.money + amount
      }
      withdraw(amount){
        return this.money = this.money - amount
      }
      check(){
         return`
         Name: ${this.name},
         Account Number: ${this.accountNum},
         Balance: ${this.money}
         `
      }
   }
   const Person1 = new Bankname("Rahul Kumar Parida",123456789,12000)
//    Person1.deposit(8000)
//   console.log(Person1.check());
//   Person1.withdraw(5000)
//   console.log(Person1.check());
  
  
}

//21.Create a class MathHelper with a static method add(a, b) that returns the sum of a and b. Call this method without creating an instance of MathHelper.
{
   class MathHelper{
     static add(a,b){
      return a+b
     }
   }

   //  console.log(MathHelper.add(3,6));
    
}

//22.Write a class Rectangle with properties width and height. Add getter methods for area and perimeter. Test the getters by creating an instance and logging the area and perimeter.
{
   class Rectangle {
      constructor(width,height) {
         this.width=width;
         this.height=height;
      }
      get area(){
         return this.width*this.height
      }
      get perimeter(){
         return 2*(this.width+this.height)
      }
   }
   const newRect = new Rectangle(5,3)
  
   // console.log(newRect.area);
   // console.log(newRect.perimeter);
}

//23.Create two classes, Shape and Circle. The Shape class has a method area() that returns "Area not defined". Override this method in Circle to calculate and return the area of a circle using its radius.

{
   class Shape{
      area(){
         return"Area Not Defined"
      }
   }
   class Circle extends Shape{
      area(r){
         return (2*3.14*r);
      }
   }
   const newCircle = new Circle()
   // console.log(newCircle.area(2)," is the area of the Circle");
}

//24.Write a class Person with a method introduce() that prints "Hi, I am <name>". Test it by creating a Person instance with a name property.
{
   class Person{
      constructor(name){
         this.name = name;
      }
      introduce(){
         return `Hi, I am ${this.name}`
      }
   }
   const User1 = new Person("Rahul")
// console.log(User1.introduce());

}

//25.Create a function constructor Person with a property name and a method sayHello. Then, create another function constructor Student that inherits from Person and has an additional property grade.
{
 function person(name){
   this.name = name;
   
 }
 person.prototype.sayHello = function(){
   return`Hello, I am ${this.name}`
 }
 function Student(name,grade){
   person.call(this,name);
   this.grade  = grade
 }
 Student.prototype = Object.create(person.prototype);
 Student.prototype.construtor = Student;

 Student.prototype.getGrade= function(){
   return`${this.name} is in ${this.grade}`
 }
 const Student1 = new Student("Rahul",12);
//  console.log(Student1.sayHello());
//  console.log(Student1.getGrade());
 
 
}
// wap to take input of number of arrays for name
{
//   let a =  prompt("Enter a number :")
//  console.log(a);
//  let arr =[a]
//  console.log(arr);
//  let namearr= arr.map(g=>{
//   g = prompt("Enter a name:" )
//   arr.push(g)
//  })
//  console.log(namearr);
}
// wap to take input from the user and make an array then find the min and max value
{ 
   //  let b = prompt("Length:" )
//     let arr = [];
//     for (let i = 0; i < b; i++) {
//       let c = prompt("Enter a number: ")
//       arr.push(c)
//    }
//    console.log(arr);
// let maxnum = 0;
// for (let index = 0; index < arr.length; index++) {
//    if (maxnum < arr[index]) {
//       maxnum = arr[index]
//    }
// }
// console.log(maxnum);
// let num = arr.map(a=>{
//    return Math.max(a)
// })
// console.log(num);
   }


{
   
   // using Prototype
   {
      let computer = {cpu:12, sound:"Dolby",Camera:true}
      let lenevo={
         screen:"HD",
         // __proto__: computer,
      };
      Object.setPrototypeOf(lenevo,computer)
      // console.log("Lenevo ",Object.getPrototypeOf(lenevo),lenevo);
      
      let tomHardWare={};
      // console.log(`lenevo with dunder `,lenevo.__proto__);   
   }
   
   // using setPrototypeOf
   {
   let genericCar = {tyres:4,drive:"Automatic",gear:"Automatic"};
   let Tata = { driver: "AI" }
   Object.setPrototypeOf(Tata,genericCar)
   // console.log(`GenericCar`,Object.getPrototypeOf(Tata),Tata);
   }
}


//Constructor Function
   {
      function Car(Name) {
            this.name = Name;
            this.describe = function (){
               return `I have a ${this.name} in my Garage`
            }         
      }
      let Mycar =  new Car("Tata Nexon");
      // console.log(Mycar);
      // console.log(Mycar.describe());
   }


{
   function Cars(model) {
      if (!new.target) {
            throw new Error("I think you forgot to add new in your code ");
            
      }
      this.model=model;
   }
   Cars.prototype.year = function(yr) {
      this.yr = yr;
      return`we bought this ${this.model} on ${this.yr}`
   }

   // let ourCar = new Cars("Honda Amaze")
   // let hisCar = Cars("Lamborghini SVJ") // add new keyword in this
   // console.log(ourCar);
   // console.log(ourCar.year(2020));
}

//let suppose i have a arr of names and i want it to loop through it each time the a function/Method is called saying something abut him
{
let arr=["Rahul","Situ","Shruti","Sheetal","Lipu","Lipi","Bubun","Biki"]
function hello(namew) {
if (namew.length < 5) {
     return `hello ${namew} your name has ${namew.length} letters`
}
return `They have a long name`
   // return `hello ${a} your name has ${a.length} letters`
}
arr.map(a=>{
//   console.log(hello(a));
})
}


//prototypalchain
{
function hii(name) {
   this.name = name;
}
hii.prototype.supp = function() {
   return`Hey!!${this.name} supp bro`
}

let me = new hii("situ")
// console.log(`me is in object form`,me);
// console.log(me.supp());
}


{
Array.prototype.show = function(){
   return `Number is ${this}`
}
let arry = [0,1,2,3,4,5,6,7,8,9]
// console.log(arry);
// console.log(arry.show());
}


//inheritance

{
 class animal {
   constructor(name , habits) {
      this.name = name;
      this.habits = habits;

   }

  doing(){
   return`${this.name} has ${this.habits}`
  }
 }

class dog extends animal {
   
   constructor(sound) {
      super("German Sephard","Gaurding")
      this.sound = sound;
   }
   makesound(){
      return`${this.name} makes sound ${this.sound}`
   }
}
let german = new dog("Woof!!")

// console.log(german);
// console.log(german.doing());
// console.log(german.makesound());

}



// encapsulation

{
   class Bankaccount {
         #balance = 0;// to encapsulate or secure it can be acessed only inside the classes
         
      deposit(amount){
         this.#balance += amount;
         return`$${this.#balance} is the total amount of money`
      }
   
      display(){
         return`you have $${this.#balance} in your bank`
      }
   }

   let myAcc = new Bankaccount();
   // console.log(myAcc.display());
   // console.log(myAcc.deposit(5000));
   // console.log(myAcc.display());
}


// Abstraction
// this way of writing code in which the user have to call just one method and get all 
{
   class CoffeeMacine {
      puttin(){
         return`Two teapoon of coffee powder and 150ml of Water is added into the mug....\n`
      }

      start(){
         return`Coffee Machine has started....\n`
      }

      done(){
         return`Your Coffee is ready`
      }

      make(){
         let put = this.puttin()
         let srt = this.start()
         let dne = this.done()

         return`${put + srt + dne}`
      }
   }
   let myCoffee = new CoffeeMacine()
   // console.log(myCoffee.make());
}

//Write a function called calculateArea that abstracts the logic for calculating the area of a rectangle. The function should take length and width as parameters.

{
class calcArea {

   constructor(length , breadth) {
      this.length = length;
      this.breadth = breadth
   }

   calculateArea(){
      return`The area of ${this.length} and ${this.breadth} is `+(this.length*this.breadth);
   }
   claculatePerimeter(){
      return`${this.length} and ${this.breadth} is `+(2*(this.length*this.breadth));
   }
   calc(){
      let area = this.calculateArea();
      let perimeter = this.claculatePerimeter()
      return`The Area is ${area} and the Perimeter is ${perimeter}`;
   }
}
let rectangle = new calcArea(10,15)
// console.log(rectangle);
// console.log(rectangle.calc());


}

//polymorphism
// taking more than one form
{
class Bird {
    fly(){
        return`Can Fly....`
    }
}
class orstrich extends Bird{
    fly(){
        return`They can't fly but can run....`
    }
}

let sparrow = new Bird();
let Ostrich = new orstrich();
// console.log(sparrow.fly());
// console.log(Ostrich.fly());
}

//Static Methods
//methods which can be acessed only by the classes
{
class calc {
    static add(a,b){
        return a+b;
    }
    static sub(a,b){
        return a-b;
    }
}
// console.log(calc.add(5,3));
// console.log(calc.sub(8,3));

}

// getter and setter
{
class Employee {
    constructor(name , salary) {
        this.name = name 
        this._salary = salary
    }
    get salary(){
        return `You are not allowed to see the salary`
    }
    set salary(value){
        if (value < 0) {
            return `Invalid Salary`
        } else {
            this._salary = value
            return `${value} is avaliable`
        }
    }
}
let me = new Employee("Rahul", 20000)
// console.log(me._salary);
// me.salary +=25000;
// console.log(me.salary);
// me.salary +=5000;
}





//! Prototype keyword is used in function or constructor function only while __proto__ works for objcets 

//Create a constructor function Animal that has a method speak() that return 'Animal speaking'.
// Then create another constructor Dog that inherits from Animal using prototypes.
// The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.

{
   function Animal(sound) {
     this.sound = sound;
   }
   Animal.prototype.speak = function(){
      return 'Animal speaking'
   }

   function Dog(sound) {
      Animal.call(this,sound)
   }
   Dog.prototype = Object.create(Animal.prototype)
   Dog.prototype.construtor = Dog;
   Dog.prototype.bark = function(){
      return `Woof!`
   }

}

// 2.Link child to parent using prototype chaining. Test if child can access the greet method.
{
let parent = {
   greet: function() {
       console.log('Hello');
       
      }
   }
   let child = {}
  child = Object.create(parent)

// console.log(child.greet());

}
//3.Create an object animal with a method makeSound.
{
   let animal = {
      makeSound: function() { 
        return `Roar`
       }
     };
  let dog = {
   bark: function(){
      return`Wooff!!`
   }
  }
  dog = Object.create(animal)
 animal.prototype= dog
//   console.log(dog.makeSound());
//   console.log(animal.bark);// parent cannot access child properties
  
  
}

//4.Create an object and test whether it has access to methods like toString or hasOwnProperty.
// Explain how these methods are accessible.
{
   let person = {
      POne: ()=>{
         return`Hello World`
      }
   
   }
   person.hii = ()=>{
      return `hello brother`
   }
   // console.log(person.hasOwnProperty()) // false
   // console.log(person.toString())//[object Object]
   // console.log(person.hii());//hello brother
   
}

//5. Create a constructor function Car with a prototype method drive. Then:
// Create an instance of Car called myCar.
// Test if myCar has direct access to the drive method or if it’s accessible via the prototype.

{
   function car() {

      start: ()=>{
         return`Car is starting`
      }
   }
  car.prototype.drive=()=>{
      console.log("Driving....nexon");
      return`Driving...`
   }
   let myCar = new car()
   // console.log(myCar.start);
   // console.log(myCar.drive());
   // console.log(myCar.__proto__.drive());

   
}

//6. Create an object parent with a property name set to "Parent".
// Link an object child to parent and set a property name to "Child" on child.
// Test the output when accessing name on both parent and child.
{
   let parent ={}
parent.name = ()=>{
   return  "Parentaaaa"
}
let child = Object.create(parent)

child.name = ()=>{
   return "Childddd";
}

child.__proto__.heyy= function(){
   console.log("How you doing")
}
// console.log(parent.name());
// console.log(child.name());
// console.log(child.heyy());

}


{
   Array.prototype.greetings = function(){
      return`This is the array of ${this}`
   }
   let arr = [1,3,5,7,9,11]
 arr.prototype = [13,15,17,19,21,23]
let newarr = arr.map(a=>{
   return 2*(arr+ ","+arr.prototype)
})
// console.log(arr.greetings());
// console.log(arr.prototype.greetings());
// console.log(newarr);

}
// 7. Examine how prototype chaining works with JavaScript arrays.
// Write an example to show how methods like map or filter are accessible through the prototype chain.
{
   let somearr = [1,3,5,7,9,11,13,15,17,19,21,23]
   somearr.__proto__ = [2,4,6,8,10]
   let concated = somearr.__proto__.concat(somearr).sort()
  
  let something = concated.map(a=>{
       return a*2
   }).filter(b=>{
      return b%4===0
   });
// console.log(concated);
// console.log(something);
}

//8. Explain what happens when you try to access a property that doesn’t exist on an object but exists on its prototype.
// Test this with code using at least three linked prototypes. For example:

//*ans> accessing  the methods of prototypes in its child is that the latest declaration will be passed on when the child element calls it
{
   let grandparent = { generation: 'Grandparent property' };
   let parent = Object.create(grandparent);
   parent.generation = 'Parent property';
   let child = Object.create(parent);
   // console.log(child.generation);
}


//!!9.Can you create a cyclic prototype chain in JavaScript? If yes, what happens when you attempt to access properties? Test this with an example.





// Task 1: Create a Functional Constructor
// Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".

// Task 2: Handle Errors
// Modify the Person constructor to throw an error if the age is not a positive number.
{
   
 function Person(name , age) {
   this.name = name;
   this.age = age
 
}
Person.prototype.greet = function() {
    return`Hello, My name is ${this.name} and my age is ${this.age}`
}
let me = new Person("Rahul", 20)
// console.log(me);
// console.log(me.greet());
}
{
   function Person(name , age) {
      this.name = name;
     if (age < 0) {
      // throw new Error("Age is less than 0 Error");
      
     }else{
      this.age = age
     }
    
   }
   Person.prototype.greet = function() {
       return`Hello, My name is ${this.name} and my age is ${this.age}`
   }
   let me = new Person("Rahul", -20)
   // console.log(me.greet());
}



// Task 1: Class Inheritance
// Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".

// Task 2: Method Overriding in Inheritance
// Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".


// Task 3: Static Methods in Classes
// Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.
{
class Vehicle{
   constructor(make , model){
      this.make = make;
      this.model = model
   }
   getDetails(){
      return `Make: ${this.make}, Model: ${this.model}`
   }
   move(){
      return "The vehicle is moving"
   }
   static isVehicle(obj){
    return obj instanceof Vehicle
   }
}

class Car extends Vehicle {
   startEngine(){
      return`Engine started`
   }
   move(){
      return "The car is driving"
   }
}

// let mycarr = new Vehicle("Toyota","Corolla")
// console.log(Vehicle.isVehicle(mycarr));
// console.log(mycarr.move());
// let mycar = new Car()
// console.log(mycar.move());
// console.log(Car.isVehicle(mycar));
// let heehe = {}
// console.log(Vehicle.isVehicle(heehe));
}


// Task 1: Encapsulation Using Getters and Setters
// Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.

{
   class BankAccount {
      #_balance = 0;
      constructor(_balance) {
         this.#_balance = _balance
      }
      deposit(amount){
         if (amount <=0) {
            throw new Error("Deposit amount must be greater than zero.")
         }
         this.#_balance += amount; 
         return `${amount} is added to  your account`
      }
      withdraw(amount){
         if (amount <0) {
            throw new Error("Balance cannot be negative.");
         }
         this.#_balance -= amount;
         return `${amount} is withdrawn from your account`
      }
      get balance() {
         return this.#_balance+` is availiable in you account`;
       }
      set balance(amount){
            if (amount < 0) {
               throw new Error("Balance cannot be negative.");
               
            }
            this.#_balance = amount;
      }
   }
// let myAccount = new BankAccount(5000);
// myAccount.withdraw(20000)
// myAccount.deposit(20000)
// console.log(myAccount.withdraw(2000));


}


// Task 2: Polymorphism with Method Overriding
// Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.
{
   class Shape {
      area(){
         return 0
      }
   }
   
   class Circle extends Shape {
      constructor(radii){
         super()
         this.radii = radii
      }
      area(){
         return (Math.PI*this.radii*this.radii)
      }
   }
   
   class Rectangle extends Shape {
      constructor(length ,breadth) {
         super()
         this.length = length
         this.breadth = breadth
      }
      area(){
         return (this.length*this.breadth)
      }
   }

//    let n1 = new Circle(12)
//    console.log(n1.area())
//   let n2 = new Rectangle(5,6)
//    console.log(n2.area())
}


{
   // Task 1: Simulating Asynchronous Behavior
// Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.
// Use setTimeout to simulate this behaviour

function simulateAsyncTask(){
   console.log("Task started");
   setTimeout(() => {
      console.log("Task finished");
      
   }, 2000);
}

// let fnc = new simulateAsyncTask()
// console.log(fnc);

}


{
   // Task 2: Simulate Multiple Async Tasks with Different Delays
// Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).
// Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously.

function simulateMultipleTasks(){
   let n =1 
   setTimeout(() => {
      console.log(`Task ${n} finished`);
      n += 1
   }, 1000);
   setTimeout(() => {
      console.log(`Task ${n} finished`);
      n += 1
   }, 2000);
   setTimeout(() => {
      console.log(`Task ${n} finished`);
      
   }, 3000);
}
// let fnc2 = new  simulateMultipleTasks()
// console.log(fnc2);

}



{
   // Task 3: Async Task with Callback Function
// Create a function fetchDataWithCallback(callback) that simulates fetching data asynchronously using setTimeout (after 2 seconds).
// Once the data is “fetched”, it should invoke the provided callback function with "Fetched data""Fetched data" as an argument.

function callback(){
   console.log("Fetched data");
   
}
function fetchDataWithCallback(param){
 setTimeout(() => {
  callback()
 }, 2000);
}

// fetchDataWithCallback("fetched")

// Correct answer :}
function fetchDataWithCallback(callback) {
   setTimeout(() => {
     const data = 'Fetched data';
     callback(data);
   }, 2000);
 }


}







}

// Task 1: Creating a Counter Using Closures
// Create a function createCounter() that returns a function which increments and returns a counter value and increase each time it is called
// function createCounter(m){
//    let counter = 0
//    function add() {
//      m = m + 1
//       console.log(m);
      
//    }
//    return add
// }

// let one = new  createCounter(5)
// console.log(one())
// let two = new createCounter(4)
// console.log(two());

// let three = new createCounter()


// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

/**
 * @return {Function}
 */
args = [];
var createHelloWorld = () => {
    return function(...args) {
       return `Hello World`
    }

}

  let f = createHelloWorld()
 // "Hello World"
// console.log(f(68212))

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
   return n++
};
// let gg = createCounter(1);
// createCounter()
// createCounter()
// console.log(gg);


// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".


/**
 * @param {string} val
 * @return {Object}
//  */
// let expect = (val) =>{
//    let valuee = val
//    // console.log(valuee);
   
//   const obj={
//     toBe :function(valee){
//       if (valuee ===  valee) {
//          return {
//             "value": true
//          }
//       } else {
//        throw new Error("Not Equal")
//       //  console.log("not executed");
       
//       }
//      },
     
//    notToBe :function(val){
//       if (valuee !==  val) {
//          return false
//       } else {
//        throw new Error("Equal")
       
//       }
//      }
//   }
//   return obj;

// }; 

// let gg = expect(5).toBe(5)
// console.log(gg);

{

// let expect = (val) =>{
//    let valuee = val
//   const obj={
//     toBe :function(valee){
//       if (valuee ===  valee) return  true
//       else throw new Error("Not Equal")

//      },
//    notToBe :function(val){
//       if (valuee !==  val) return true
//        else throw new Error("Equal")
//      }
//   }
//   return obj;
// }; 

// let heh = expect(8).toBe(8)
// console.log(heh);
// let ge = expect(8).notToBe(5)
// console.log(ge);


}

{
   // class expect {
   //    constructor(valw) {
   //       this.valw = valw
   //    }
     
   //    }
   //   } tobee(valee){
   //    if (this.valw ===  valee) {
   //       return true
   //    } else {
   //     throw new Error("Not Equal")
       
   //    }
   //   }
   //   notToBe(val){
   //    if (this.valw !==  val) {
   //       return false
   //    } else {
   //     throw new Error("Equal")
       
   //    }
   //   }
   // }
   // let gg = new expect(5)
   // console.log(gg.tobee(5));
   // console.log(gg.notToBe(5));
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */





// Task 4: Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

//Examples

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4


// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0
{
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
   let ret = init
   return {
      increment: function() {
         ++init
        return init
      },
      decrement: function() {
         --init
        return init
      },
      reset : function() {
         init = ret
         return init
      }
    }
};
// let he =createCounter(9)
// console.log( he.increment());
// console.log( he.reset());
// console.log( he.increment());
// console.log( he.decrement());
// console.log( he.decrement());
// console.log( he.decrement());
}



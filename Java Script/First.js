console.log("Hello Worlds this is my first java script program");
var a = 58;
//should not use var its old and less prefferable tha let and const
let b= 24;
const PI= 3.14;
console.log(a+b+PI);
let Name="Rahul";
let name="Parida";
console.log(Name+' '+name);//it is case sensitive
//let see bock scope
{
    let name="situ";
    console.log(name)
}
// this above is an example of block scope same name can be declared in diffrent scope
// to know the data type of a variable we use
console.log(typeof Name);
var age = 19;
console.log(typeof age);
let num=BigInt("165131831694614");
console.log(typeof num);
let sym = Symbol("@#$%^&*()");
console.log(typeof sym);
// creating an object
const student={
   myName:"Rahul",
   age :20,
   cgpa: 9.8,
   ispass :true
};

console.log(student);
// to select a data from the object created
console.log(student["myName"]);
// another way of selecting a data from the created object is 
console.log(student.age);
// to change the data existing in the file we use
student.myName="Rahul Kumar Parida";
console.log(student);
// q1. create a  object called product  to store info  in the given pucture
console.log("creating an object of data of the product image");
const product={
  picture: "pen",
  name:"AmazonBasics Elegant Ballpoint Pen with Classy Stainless Steel Body (Blue Ink)",
  price:287,
  MRP: 599,
  rating:3.0,
  discount: "52%" ,
  freedelivery : true,
  cashOnDelivery:true
};
console.log(product);
// q1. create a  object called profile  to store info  in the given picture
console.log("creating an object of data of the profile image");
const profile = {
 userName:"rahulroxx460",
 name:"Rahul Roxx",
 posts:32,
 followers:328,
 following: 242,
 posted_story:true
};
console.log(profile);
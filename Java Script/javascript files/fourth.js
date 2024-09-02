{
    let marks = [99,98,97,96,95,94,93,92,91,90];
console.log(marks);
console.log(marks.length);
let name =["Rahul","Situ",'Tushar',`Shruti`];
console.log(name);
console.log(name.length);
console.log(marks[5]);// starts from 0 till the last
console.log(marks);
marks[0]= 100; 
console.log(marks);
// // looping over an array
// for(i  = 0; i< name.length;i++)
//     console.log(name[i])

for (const el of name) {
    console.log(el)     // using for of loop 
}

for(i  = 0; i< marks.length;i++){
    console.log(marks[i]);
}

// PRACTICE QUESTION 
// for  a given array of marks find the average of the marks arr[85,97,44,37,76,60]
{
    let marks = [85,97,44,37,76,60]
    let avg;
    let sum= 0;
  
    for(i=0 ; i< marks.length; i++){
     sum = sum + marks[i];

    }
    // or
    // for (const val of marks) {
    //     sum = sum + val;
    // }
    console.log(sum)
    avg= sum/marks.length;
    console.log(avg);

}  
console.log("SECOND QUESTION------------->")
// for  a given array with price of five items [250,645,300,900,50] . all the offer of 10% OFF on them . chyanges the array to store the final price ater applying offer
{
    let price =[250,645,300,900,50];
    console.log("The Real Price are  ", price)
    let discounted;
    for ( i = 0 ; i< price.length; i++ ) {
        discounted = price[i]/10;
        price[i] = price[i] - discounted;
     
    } 
    console.log("The Discounted price are " , price) ;  
}

// ARRAYS methods
 
{
    let veggies = ["potato", "cabbage", "beetroot", `peas`];
    console.log(veggies)
    // to add  an elemnt
     veggies.push("brinjal");
     console.log(veggies);
     // to delete an elemnt
      veggies.pop();// alwas delete the last entered element
      console.log(veggies);
      console.log(veggies.toString());
    let non_veg =["Mutton","Egg", "Chicken"];
    let allFood = veggies.concat(non_veg); // joins more thean one string
    console.log(allFood);
    
    allFood.unshift("Brinjal" , "Pumpkin");// pushes an elemet but at tthe start
    console.log(allFood);
    allFood.shift();// pos / delete the very first element
    console.log(allFood);
    console.log(allFood.slice(0 ,2));// the end value is always excluded
    let spliceof =veggies.splice(2,2,"raddish" ,"Cauliflower");
    console.log(spliceof);
    console.log(veggies);

    
}
console.log("Practice Question===========================>");

// PRACTICE QUESTION
// create a n array  to store ["Bloomeberg", "Microsoft","Uber","Google", "IBM","Netflix"] and then remove the first company o fthe array 
//remove uber and add ola in its place  add amazon at the end
{
    let companies =["Bloomeberg", "Microsoft","Uber","Google", "IBM","Netflix"] ;
    //first
    console.log(companies);
    let firsttask = companies.shift();
    console.log(companies);
    // second 
    let secondtask = companies.splice(1,1,"OLA");
    console.log(companies);
    // third 
    let thirdtask = companies.push("Amazon");
    console.log(companies);
}








}
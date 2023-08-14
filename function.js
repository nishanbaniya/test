//function without argument
// function myName(){
//   console.log("My Name is Nishan");
// }
// myName();


//function with 1 arguement
// function myName2(name){
//     sth=`My Name is ${name} `    //is equivalent to sth="My name is " + name ,
//     console.log(sth);
//   }
//   myName2("Nishan Baniya");

//making sum
// function sum(a,b) {
//     return a+b;
    
// }
// c=sum(1,2);
// console.log(c);

  

//making try.js calculator using function
// function calculateFood(food, tipPer){
//     //food=food
//     const tipPercentage= tipPer/100;
//     const tipAmount= food * tipPercentage;
//     const total = Sum(food, tipAmount ) ;
//     return total;
//     }
//     console.log(calculateFood(100, 20));
function sum(a, b) {
    return a + b
}

function calculateFoodTotal(food, tip) {
    tipPercentage = tip / 100
    tipAmount = food * tipPercentage
    total = sum(food, tipAmount)      //above function "sum" is used here.
    return total
}
console.log(calculateFoodTotal(200, 20))

//arrouw function with explicit return
// const myFunction =(a,b) => {
//     return a+b
// }

// //arrouw function with implicit return
// const myFunction2 =(a,b) => a+b
// console.log(myFunction2(4,3) )



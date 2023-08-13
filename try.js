// console.log('how');
// function myFunction() {
//     a="me nishan";
//     console.log(a);
// }
// myFunction();
// c=prompt("Enter a number")
// console.log(c);
// console.log(c)
food=Number(prompt("Price of food?"));
//console.log(food)
discountPercentage=Number(prompt("Discount Percent?"));
discountAmount=food*(discountPercentage/100);
totalAmount=food-discountAmount;
alert(totalAmount)

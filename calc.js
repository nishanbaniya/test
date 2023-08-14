var a=Number(prompt("Enter first number:"));
var o=prompt("Enter the Operator");
var b=Number(prompt("Enter second number:"));
if(o == "+") {
  c=a+b;
}
else if(o == "-") {
    c=a-b;
  }
else if(o == "*") {
    c=a*b;
  }
else if(o == "/") {
    c=a/b;
  }
  else if(o == "**") {            //power i.e. a ko power ma b. called exponential
    c=a**b;
  } 
  console.log(c);
  alert("The answer is: " + c)


//   math methods
// a=10.11;                         
// b=Math.floor(a);                //point paxadi jati vayeni point agadi ko matra lekhxa. i.e Rounds down
// console.log(b);

// c=10.11;
// d=Math.ceil(c);                   //point paxadi jati vayeni point agadi ko +1  lekhxa.  i.e. Rounds Up
// console.log(d);

//Math.random()                 // Used for generating random number .this will generating random numbers between o and 1.
//Math.random()*100             //This will generate random numbers between 0 and 100.


//Rock Seissor Paper
//Math.floor(Math.random()*3);     // This will generate only integers numbers between 0 and 2.


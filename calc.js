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

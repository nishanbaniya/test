//const arrayP=["A", "B", "C", "D", "E", "F"]
//console.log(arrayP)      //shows all array elements

//console.log(arrayP[1])   //shows element in index = 1

//arrayP.push("G")           // add G at the last of array

//arrayP.push("H")

//arrayP.pop()              // pop or remove the last element of the array

//console.log(arrayP)


//Array Slice
//console.log(arrayP.slice(0,3))     // shows only 0 to 2 index elements.

//console.log(arrayP.slice(3,6))      // shows only 3 to 5 index elements.
  

//indexOf
//console.log(arrayP.indexOf("C"))        // tell the index value of elements
  

//Length
//console.log(arrayP.length)          //provide length of array-> starting from 1 /not like indexing starting from 0


//some practice
const myArray=["Ram", "Shyam", "Hari", ["a","b","c"],["x","y",["m","n"]] ]
console.log(myArray[1])   //calls Shyam fron the array
console.log(myArray[3])    //calls ["a","b","c"] from the array
console.log(myArray[3][2])    //calls c from the array
console.log(myArray[4][2])    //calls ["m","n"] from the array
console.log(myArray[4][2][0])    //calls m from the array
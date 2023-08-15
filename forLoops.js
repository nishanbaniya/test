// const myArray=[2,3,5,4,5,67,8,4,2,8,4,0,12]
// for (let i=0;i<myArray.length;i++){
// console.log(i, myArray[i])
// }             //it will execute as it will show all array index followed by corresponding elements of array.

// const myArray2=[2,3,5,4,5,67,8,4,2,8,4,0,12]
// for (let i=0;i<myArray2.length;i++){
// console.log(i, myArray2[7])
// }             //it will execute as it will show all array index followed by  element of array with index 7 .

// const myArray=[2,3,5,4,5,67,8,4,2,8,4,0,12] 
//     for(const numbers of myArray)
//     console.log(numbers)
//             //it will execute as it will show all array index followed by corresponding elements of array.

// const myArray2=[2,3,5,4,5,67,8,4,2,8,4,0,12] 
//     for(const numbers of myArray2)
//     console.log(numbers*2)     //multiply all array elements by 2 and shows all array elements             

//create array with numbers and store those numbers by doubling it in another array
//  const myArray2=[2,3,5,4,5,67,8,4,2,8,4,0,12]

//  let result=[];                           //empty array

// for(const numbers of myArray2){
//     result.push(numbers*2);
// }
// console.log(result)                  //for showing what now stored in reslut 
// for (const num of result){
//     console.log(num)      
// }                                     //for showing all array elemen ts of result.
                             
//give input array using functions
// const double=(numbers)=>{         
//     let result=[];
//     for(const number of numbers){
//         result.push(number*2)
//     } 
//     return result
//  }
//  console.log(double([1,2,3,4]))  

// const double=(numbers)=>{         
//     let result=[];
//     for(const number of numbers){
//         result.push(number**2)
//     } 
//     return result
//  }
//  console.log(double([1,2,3,4])) 


//exercises
// const countLetter = () => {
//     const str="Hey, what is your name?"
    
//     for(let letter in str){             //"letter of str" would have done print every letter of str. but "letter in str" will give numberCount of letters of str
//         console.log(Number(letter)+1)
//     }
// }
// countLetter();

//same thing in diffrent way
// const countLetter = (str) => {
//     let result=0;

//     for(let index in str){             //"letter of str" would have done print every letter of str. but "letter in str" will give numberCount of letters of str
//         console.log(Number(index)+1)
//          result=Number(index)+1;
//     }
//     return {result}
    
// }
// const str=prompt("Write your phrase")
// console.log(countLetter(str));


//same as above
// const countLetter = (str) => {
//     let result=0;

//     return {result: str.length}
    
// }
// const str=prompt("Write your phrase")
// console.log(countLetter(str));


//Sum of Array elements
const sumArray=(value) =>{
    let result=0;

    for (let number of value ){
    console.log(number) 
    result =result+number
    }
    return {result}
}
const num=[10,20,30,40];
console.log(sumArray(num))


//map will  loops and returns an array
// [1,2,3,4,5].map(number=>console.log(number))

// [1,2,3,4,5].map(number =>{
//     console.log(number)
//     console.log(number*2)
// })

// let result= [1,2,3,4,5].map(number=>number*2)
// console.log(result)

// const doubleMap=(numbers)=>{
//   result= numbers.map(number=> number*2)
//   return result
// }
// console.log(doubleMap([1,3,5,7]))

//filter manually
// const filter=(numbers, greaterThan)=>{
//   result=[]
//   for(const number in numbers){
//     if (numbers[number]>greaterThan ){
//       result.push(numbers[number])
//     }
//   }
//   return result
// }
// console.log(filter([3,0,2,1,1,1,5],4))


//using filter which will loops and returns an array with matching conditions
// const filterF=(numbers, greaterThan,lessThan)=>{

//   return numbers.filter(number=> number>greaterThan||number<lessThan)
  
// }
// console.log(filterF([1,3,5,7,9],4,2))


// const person=[
//   {name:"John", age:6}
//   ,{name:'Rock', age :8},
//   {name:"Smith", age:10},
//   {name:"Harry", age:15}
// ]
// let result=person.filter(man=>man.age>9)
// console.log(result)
// let names= result.map(man=>man.name).join(", ")
// console.log(names)


//reduce loops and gives you back the accumulator
// const numbers=[2,4,6,8]
// const result=numbers.reduce((prev,curr)=>prev+curr)
// console.log(result)

//OR
// const numbers=[2,4,6,8]
// const sumArray=(prev,curr)=>prev+curr 
// console.log(numbers.reduce(sumArray))

//Multiplication
// const numbers1=[2,4,6,8]
// const mulArray=(prev,curr)=>prev*curr 
// console.log(numbers1.reduce(mulArray))

// const numbers=[2,4,6,8]
// const result=numbers.reduce((prev,curr)=>prev+curr,10)      //10 will add by default. if we put negative number that will be subtracted/ i.e. reduce can take two arguments first one is function and another one can be a default value
// console.log(result)


const person=[
  {name:"John", age:6}
  ,{name:'Rock', age :8},
  {name:"Smith", age:10},
  {name:"Harry", age:15}
]
// let ages=person.map(man=>man.age)
// let result= ages.reduce((a,b)=>a+b)
// console.log(result)

//OR
console.log(person.reduce((prev,curr)=> prev+ curr.age, 0 ))
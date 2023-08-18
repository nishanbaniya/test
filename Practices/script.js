// // let titleDiv= document.getElementById("titl")
// //  console.log("before: ",titleDiv.innerText)
// //  message="Hello How are you"
// //  titleDiv.innerText=message
// //  console.log("after: ",titleDiv.innerText)
// //  titleDiv.innerHTML=`${message}`

// let colors=document.querySelectorAll(".clClick")
// let timesClc={"bluee":0, "purplee":0, "greye":0  }
// colors.forEach(color => {
//     color.onclick=()=>{
//         timesClc[color.value] +=1
//         color.innerText=timesClc[color.value]
//         console.log(timesClc)
//     }  
// });
// let fClear=document.getElementById("clearC")
// fClear.onclick=()=>{
//     // timesClc.bluee=0
//     // timesClc.purplee=0
//     // timesClc.greye=0
//     timesClc={"bluee":0, "purplee":0, "greye":0}
//     colors.forEach(color=>{
//         color.innerText=" "
//     })
    
// }


// /* 
// 🌟 APP: Tip Calculator

// These are the 3 functions you must use 👇
// =========================================
// calculateBill()
// increasePeople()
// decreasePeople()

// These functions are hard coded in the HTML. So, you can't change their names.

// These are all the DIV ID's you're gonna need access to 👇
// ========================================================
// #1 ID 👉 'billTotalInput' = User input for bill total
// #2 ID 👉 'tipInput' = User input for tip
// #3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
// #4 ID 👉 'perPersonTotal' = Total dollar value owed per person
// */

// // Get global access to all inputs / divs here (you'll need them later 😘)
// // bill input, tip input, number of people div, and per person total div



// // Get number of people from number of people div


// // ** Calculate the total bill per person **
// const calculateBill = () => {
//     // get bill from user input & convert it into a number
    
  
//     // get the tip from user & convert it into a percentage (divide by 100)
    
  
//     // get the total tip amount
    
  
//     // calculate the total (tip amount + bill)
    
  
//     // calculate the per person total (total divided by number of people)
  
  
//     // update the perPersonTotal on DOM & show it to user
  
//   }
  
//   // ** Splits the bill between more people **
//   const increasePeople = () => {
//     // increment the amount of people
  
  
//     // update the DOM with the new number of people
  
  
//     // calculate the bill based on the new number of people
  
//   }
  
//   // ** Splits the bill between fewer people **
//   const decreasePeople = () => {
//     // guard clause
//     // if amount is 1 or less simply return
//     // (a.k.a you can't decrease the number of people to 0 or negative!)
  
    
//     // decrement the amount of people
  
  
//     // update the DOM with the new number of people
  
  
//     // calculate the bill based on the new number of people
  
//   }


let billTotal = document.getElementById("billTotalInput")
let tip = document.getElementById('tipInput')
let totalPP = document.getElementById('perPersonTotal')
let numberP = document.getElementById('numberOfPeople')


const calculateBill = () => {
  result1 = Number(billTotal.value) + Number(tip.value / 100 * billTotal.value)
  result= Number(result1)/number
  // totalPP.innerHTML = result
  totalPP.innerHTML = `$${result.toFixed(2)}`
  return result

}

let button = document.querySelectorAll(".splitButton")
let number=Number(numberP.innerText)

const increasePeople = () => {
  number += 1
  numberP.innerHTML = Number(number)
  calculateBill()
}


const decreasePeople = () => {
  if(number==1){
    return
  }
  else{
      number -= 1
      numberP.innerHTML = Number(number)
      calculateBill()
  }


}
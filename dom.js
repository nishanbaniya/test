// console.log("Hi")
// let titleDiv= document.getElementById("title")
// console.log("before: ",titleDiv.innerText)
// let message="I am nishan"
// titleDiv.innerText=message
// console.log("after: ",titleDiv.innerText)
// titleDiv.innerHTML="<p> Hello </p>"
// titleDiv.innerHTML=`<p> ${message} </p>`
// titleDiv.style.color="blue"
// titleDiv.style.backgroundColor="red"


let redDiv=document.getElementById("red")
let yellowDiv=document.getElementById("yellow")
let greenDiv=document.getElementById("green")

redDiv.onclick=()=>console.log("You clicked red")
yellowDiv.onclick=()=>console.log("You clicked yellow")
greenDiv.onclick=()=>console.log("You clicked green")

// const squares=document.querySelectorAll(".colorSquare")
//console.log(squares)

// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

// const squares=document.querySelectorAll(".colorSquare")
// const timesClicked={"red":0, "yellow":0, "green":0}
// //forEach
// squares.forEach(square=>{
//     square.onclick=()=>{
//         timesClicked[square.value] +=1
//         square.innerText=timesClicked[square.value]
//         //console.log(square.value)
//         console.log(timesClicked)
//     }    
// })

// const clearScores=()=>{
//     timesClicked.red=0
//     timesClicked.yellow=0
//     timesClicked.green=0
//     squares.forEach(square=>{
//         square.innerText=" "
//     })
// }
// const clearGameBtn=document.getElementById("clear-game")
// clearGameBtn.onclick=()=>clearScores()











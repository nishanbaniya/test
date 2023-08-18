//.innerHTML le chai HTML ko id title wala ko text change garna milxa
//document.getElementById("title").innerHTML = "Hello World!";

// //update js from html
// title = document.getElementById("titl")

// console.log("Before:",title.innerText)

// //update html from js
// title.innerText = 'bye bye forever'
// message = "Wanna play a game?Click at the boxes below."
// title.innerText=message;
// console.log("After:",title.innerText)

//  title.innerHTML =`<p>${message}</p>`
//   title.style.color='pink'

  

 // red.onclick=() => console.log("User chose: Rock")
  //yellow.onclick=() => console.log("User chose: Paper")
  //green.onclick=() => console.log("User chose: Scissor")

  
  //console.log(squares)

  //console.log(squares[0].value)
  //console.log(squares[1].value)
  //console.log(squares[2].value)

  //instead of repeating same code we will use loop

  //for each
  //squares.forEach(square => {
    //square.onclick= () => console.log(square.value)})

let red=document.getElementById("red")
let yellow=document.getElementById("yellow")
let green=document.getElementById("green")

const squares = document.querySelectorAll('.color')

let timesClicked={'red':0,'yellow':0,'green':0}
squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value]+=1
        square.innerText = timesClicked[square.value]
    }
})
const clearGame = document.getElementById('clear-game')

clearGame.onclick=() =>{
    timesClicked={'red':0,'yellow':0,'green':0}
    squares.forEach(square => {
        square.innerText=" "
    })
}
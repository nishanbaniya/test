let playerScore = document.getElementById('player-score')
let hands = document.getElementById('hands')
let result = document.getElementById('result')
let endGameButton = document.getElementById('endGameButton')

let rpsButtons = document.querySelectorAll('.rpsButton')


function getComputerChoice() {
    let rpsChoices = ['Rock', 'Paper', 'Scissors']
    let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
    return computerChoice
}

function getResult(playerChoice, computerChoice) {
    
    let score;
  
    
    if (playerChoice === computerChoice) {
      score = 0
  
    
    } else if ((playerChoice === 'Rock' && computerChoice === 'Scissors') || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper")) {
      score = 1
  
    } else {
      score = -1
    }
  
    return score
  }
  
  
function showResult(score, playerChoice, computerChoice) {

    switch (score) {
      case -1:
        result.innerText = `You Lose!`
        break;
      case 0:
        result.innerText = `It's a Draw!`
        break;
      case 1:
        result.innerText = `You Win!`
        break;
    }
  
    playerScore.innerText = `${Number(playerScore.innerText) + score}`
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}
  
  
function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice.value, computerChoice)
    showResult(score, playerChoice.value, computerChoice)
}
  
function playGame() {
    rpsButtons.forEach(rpsButton => {
      rpsButton.onclick = () => onClickRPS(rpsButton)
    })
  
    endGameButton.onclick = () => endGame()
}
  
function endGame() {
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
}
  
playGame()  








// let score= document.getElementById("player-score")
// let hands= document.getElementById("hands")
// let result= document.getElementById("result")
// let end= document.getElementById("endGameButton")

// let buttons=document.querySelectorAll(".rspButton")
// let person

//     buttons["Rock"].onclick=()=>  person=1
    
//     buttons["Paper"].onclick=()=>  person=2
    
//     buttons["Scissor"].onclick=()=> person=3
    


//    let computer =Math.ceil(Math.random()*3)


//     if ((person==1 && computer==1) || (person==2 && computer==2) || (person==3 && computer==3) ){
//         result.innerText="Its a tie"
//     }
//     else if ((person==1 && computer==2) || (person==2 && computer==3) || (person==3 && computer==1)){
//         result.innerText="You lost the match"
//     }
//     else if ((person==2 && computer==1) || (person==3 && computer==2) || (person==1 && computer==3)){
//         result.innerText="You lost the match"
//     }
//     else{
//         result.innerText="Error"
//     }



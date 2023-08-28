let playerScore = document.getElementById('player-score')
let hands = document.getElementById('hands')
let result = document.getElementById('result')
let endGameButton = document.getElementById('endGameButton')

let rpsButtons = document.querySelectorAll('.rpsButton')
 

function getComputerChoice() {
    let rspChoices= ["Rock", "Paper", "Scissors"]
    let computerChoice= rspChoices[Math.floor(Math.random()*3)]
    return computerChoice
}

function getResult(playerChoice, computerChoice) {
    let score

    if (playerChoice === computerChoice) {
        score=0
    }

    else if ((playerChoice === 'Rock' && computerChoice === 'Scissors') || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper")) {
        score = 1

    } 
    
    else {
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





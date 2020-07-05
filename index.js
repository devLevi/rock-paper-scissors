let computerScore = document.getElementById('computerScore')
let playerScore = document.getElementById('playerScore')
let round = document.getElementById('roundCounter')
let results = document.getElementById('gameInfo')
let winningImg = document.getElementById('winningImg')
let playerWins = 0
let computerWins = 0
let gameRound = 0

let playerMove
let computerMove

function playerTurn(playerChoice) {
  if (playerChoice == 1) {
    playerMove = 'rock'
  } else if (playerChoice == 2) {
    playerMove = 'paper'
  } else {
    playerMove = 'scissors'
  }
  console.log('player move = ' + playerMove)
}

function computerTurn() {
  const options = ['rock', 'paper', 'scissors']
  computerMove = options[Math.floor(Math.random() * options.length)]
  console.log('computer move = ' + computerMove)
}

function playRound() {
  if (
    (playerMove === 'rock' && computerMove === 'paper') ||
    (playerMove === 'paper' && computerMove === 'scissors') ||
    (playerMove === 'scissors' && computerMove === 'rock')
  ) {
    results.innerHTML = `You chose: ${playerMove} <br> Compuer chose: ${computerMove} <br> Computer wins this round!`
    computerWins++
    computerScore.innerHTML = computerWins
    winningImg.src = `images/${computerMove}.png`
    gameRound++
    console.log('gameRound = ', gameRound)
    round.innerHTML = gameRound
  } else if (
    (computerMove === 'rock' && playerMove === 'paper') ||
    (computerMove === 'paper' && playerMove === 'scissors') ||
    (computerMove === 'scissors' && playerMove === 'rock')
  ) {
    results.innerHTML = `You chose: ${playerMove} <br> Compuer chose: ${computerMove} <br>You win this round!`
    playerWins++
    playerScore.innerHTML = playerWins
    winningImg.src = `images/${playerMove}.png`
    gameRound++
    round.innerHTML = gameRound
  } else if (computerMove === playerMove) {
    console.log('tie = ', computerMove, playerMove)
    results.innerHTML = 'Tie!'
    winningImg.src = 'images/tie.svg'
    gameRound++
    round.innerHTML = gameRound
  }
  if (gameRound > 4) {
    if (computerWins == playerWins) {
      results.innerHTML = 'EVERYBODY WINS'
    } else if (computerWins > playerWins) {
      results.innerHTML = 'COMPUTER WINS'
    } else {
      results.innerHTML = 'YOU WIN!'
    }
    setTimeout(resetStats, 1000)
    function resetStats() {
      playerWins = 0
      computerWins = 0
      gameRound = 0
      results.innerHTML = "Let's play again"
      computerScore.innerHTML = 0
      playerScore.innerHTML = 0
      round.innerHTML = 0
      winningImg.src = '/'
    }
  }
}

// let playerSelection = prompt('Rock Paper or Scissors?')
// let computer = computerTurn()

let playerWins = 0
let computerWins = 0
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
function computerTurn() {
  const options = ['rock', 'paper', 'scissors']
  return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computer) {
  let player = playerSelection.toLowerCase()
  if (
    (player === 'rock' && computer === 'paper') ||
    (player === 'paper' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'rock')
  ) {
    computerWins++
    console.log('computer wins', computerWins)
    return `You lose! ${capitalize(computer)} beats ${player}!`
  } else if (
    (computer === 'rock' && player === 'paper') ||
    (computer === 'paper' && player === 'scissors') ||
    (computer === 'scissors' && player === 'rock')
  ) {
    playerWins++
    console.log('player wins:', playerWins)
    return `You win! ${capitalize(player)} beats ${computer}!`
  } else if (computer === player) {
    return `Tie! ${capitalize(player)} = ${computer}`
  } else {
    return `${player} is not a valid selection. Try again`
  }
}

let playerSelection = prompt('Rock Paper or Scissors?')
let computer = computerTurn()
console.log(playRound(playerSelection, computer))

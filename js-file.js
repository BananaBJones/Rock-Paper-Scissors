
let playerScore = 0;
let roundNum = 1;

function computerPlay () {
    var cChoices = ['Rock', 'Paper', 'Scissors'];
    const cPlay = cChoices[Math.floor(Math.random() * cChoices.length)];
    return(cPlay)
}
function aRound(playerSelection, computerSelection) {
    roundNum++;

    switch(playerSelection)
    {
        case 'Rock': 
            if (computerSelection === 'Scissors') {
                playerScore++;
                return "Winner";
            }
            else if (computerSelection === 'Paper') {
                playerScore--;
                return "Loser";
            }
            else {
               return "Tie";
            }
            break;
        case 'Paper':
            if (computerSelection === 'Rock') {
                playerScore++;
                return "Winner";
            }
            else if (computerSelection === 'Scissors'){
                playerScore--;
                return "Loser";
            }
            else {
                return "Tie";
            }
            break;
        case 'Scissors': 
            if (computerSelection === 'Paper'){
                playerScore++;
                return "Winner";
            }
            else if (computerSelection === 'Rock') {
                playerScore--;
                return "Loser";
            }
            else {
                return "Tie";
            }
            break;
        default: 
            console.log('Type Rock Paper or Scissors only');
    }    
}
function updateUI() {

}
function playRound(buttonChoice) {
        let playerChoice = buttonChoice // prompt('Rock Paper or Scissors?');
        playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();
        let computerChoice = computerPlay();
        if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors") {
            console.log('Round: ' + roundNum);
            round.textContent = 'Round Number: ' + roundNum;
            container.replaceChild(round, round);
            let results = aRound(playerChoice, computerChoice);
            console.log('Player: ' + playerChoice);
            sPlayerChoice.textContent = 'Player: ' + playerChoice;
            container.replaceChild(sPlayerChoice, sPlayerChoice);
            console.log('Computer: ' + computerChoice);
            sComputerChoice.textContent = 'Computer: ' + computerChoice;
            container.replaceChild(sComputerChoice, sComputerChoice);
            console.log('Results: ' + results);
            result.textContent = 'Result: ' + results;
            container.replaceChild(result, result);
        }
        else {
            return;
        }
    console.log('Game Over! Your final score is: ' + playerScore);
    score.textContent = 'Score: ' + playerScore;
    container.replaceChild(score, score);

}
function resetGame() {
    roundNum = 1;
    playerScore = 0;
}
function game(buttonChoice) {
    if (roundNum < 5) {

        playRound(buttonChoice);
    }
    else {
        playRound(buttonChoice);
        if (playerScore >= 3) {
            winner.textContent = "Player Wins";
            container.appendChild(winner);
            resetGame();
        }
        else {
            winner.textContent = "Computer Wins";
            container.appendChild(winner);
            resetGame();
        }
    }
}
const btn = document.querySelector('.btn');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    });
  });
const container = document.querySelector('#container');

round = document.createElement('div');
round.classList.add('roundNum');
round.textContent = "Round Number: " + roundNum;
container.appendChild(round);

sPlayerChoice = document.createElement('div');
sPlayerChoice.classList.add('playerChoice')
sPlayerChoice.textContent = 'Player: ';
container.appendChild(sPlayerChoice);

sComputerChoice = document.createElement('div');
sComputerChoice.classList.add('computerChoice');
sComputerChoice.textContent = 'Computer: ';
container.appendChild(sComputerChoice);

result = document.createElement('div');
result.classList.add('results');
result.textContent = 'Result: ';
container.appendChild(result);

score = document.createElement('div');
score.classList.add('score');
score.textContent = 'Score: ' + playerScore;
container.appendChild(score);

winner = document.createElement('div');
winner.classList.add('winner');
winner.textContent = 'Winner';
container.appendChild(winner);


// const results = document.createElement('div');
// results.classList.add('results');
// results.textContent = 'Results';
// container.appendChild(results);

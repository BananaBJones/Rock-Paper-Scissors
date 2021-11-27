
let playerScore = 0;
let roundNum = 1;

function computerPlay () {
    var cChoices = ['Rock', 'Paper', 'Scissors'];
    const cPlay = cChoices[Math.floor(Math.random() * cChoices.length)];
    sComputerChoice.src = 'Images/' + cPlay +' Blue.png';
    right.replaceChild(sComputerChoice, sComputerChoice);
    return(cPlay)
}
function whoWon(playerSelection, computerSelection) {
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
    }    
}
function winnerMessage(result) {
    let quips = {
        Winner: ['Nice One!', 'You Did It!', 'You\'re Just Too Good!', 'Winner Winner Chicken Breakfast',
                'Too Good!!', 'The Computer Can\'t Handle You!'],
        Loser: ['Better Luck Next Time :(', 'You Lost?', 'It\'s Not Over Until It\s Over'],
        Tie: ['Tie? How Boring', "You Tied! Loser/Winner!", 'Just Go Again']
    }
    let randomNum = Math.floor(Math.random() * quips[result].length);
    winner.textContent = quips[result][randomNum];
    body.insertBefore(winner, container);

}
function playRound(buttonChoice) {
        let playerChoice = buttonChoice // prompt('Rock Paper or Scissors?');

        let computerChoice = computerPlay();

        if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors") {
            round.textContent = 'Round ' + roundNum;
            body.replaceChild(round, round);

            let results = whoWon(playerChoice, computerChoice);

            if (results === 'Winner') {
                winnerMessage('Winner');
            }
            else if (results === 'Loser') {
                winnerMessage('Loser');
            }
            else {
                winnerMessage('Tie');
            }
            // sPlayerChoice.textContent = playerChoice;
            sPlayerChoice.src = 'Images/' + playerChoice +' Orange.png';
            left.replaceChild(sPlayerChoice, sPlayerChoice);

            result.textContent = results;
            body.replaceChild(result, result);
        }
        else {
            return;
        }
    score.textContent = playerScore;
    body.replaceChild(score, score);

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
            body.insertBefore(winner, container);
            resetGame();
        }
        else {
            winner.textContent = "Computer Wins";
            body.insertBefore(winner, container);
            resetGame();
        }
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    });
  });

const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
    img.addEventListener('click', () => {
        game(img.id);
    });
  });

const container = document.querySelector('#container');
const body = document.querySelector('body');
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const lHeader = document.querySelector('#l-header');
const rHeader = document.querySelector('#r-header');

round = document.createElement('div');
round.classList.add('roundNum');
round.textContent = "Round " + roundNum;
body.insertBefore(round, container)

sPlayerChoice = document.createElement('img');
sPlayerChoice.classList.add('playerChoice')
// sPlayerChoice.textContent = '';
sPlayerChoice.src = '';
left.appendChild(sPlayerChoice);

sComputerChoice = document.createElement('img');
sComputerChoice.classList.add('computerChoice');
// sComputerChoice.textContent = '';
sComputerChoice.src = '';
right.insertBefore(sComputerChoice, rHeader);

result = document.createElement('div');
result.classList.add('results');
result.textContent = 'Score';
body.insertBefore(result, container);

score = document.createElement('div');
score.classList.add('score');
score.textContent = playerScore;
body.insertBefore(score, container)

winner = document.createElement('div');
winner.classList.add('winner');
winner.textContent = '\\\\\\ Good Luck!! ///';
body.insertBefore(winner, container);


// const results = document.createElement('div');
// results.classList.add('results');
// results.textContent = 'Results';
// container.appendChild(results);

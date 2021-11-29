
let playerScore = 0;
let computerScore = 0;
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
                computerScore++;
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
                computerScore++;
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
                computerScore++;
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
    sPlayerScore.textContent = playerScore;
    left.replaceChild(sPlayerScore, sPlayerScore);

    sComputerScore.textContent = computerScore;
    right.replaceChild(sComputerScore, sComputerScore);

}
function resetGame() {
    roundNum = 1;
    playerScore = 0;
    computerScore = 0;

    round.textContent = "Round " + roundNum;
    body.insertBefore(round, container);

    result.textContent = 'Score';
    body.insertBefore(result, container);

    winner.textContent = '\\\\\\ Good Luck!! ///';
    body.insertBefore(winner, container);

    sPlayerScore.textContent = playerScore;
    left.replaceChild(sPlayerScore, sPlayerScore);

    sComputerScore.textContent = computerScore;
    right.replaceChild(sComputerScore, sComputerScore);

}
// function game(buttonChoice) {
//     if (roundNum < 5) {
//         playRound(buttonChoice);
//     }
//     else {
//         playRound(buttonChoice);
//         if (playerScore >= 3) {
//             winner.textContent = "Player Wins";
//             body.insertBefore(winner, container);
//             resetGame();
//         }
//         else {
//             winner.textContent = "Computer Wins";
//             body.insertBefore(winner, container);
//             resetGame();
//         }
//     }
// }

function game(buttonChoice) {
    playRound(buttonChoice);
    if (playerScore === 5) {
        winner.textContent = "Player Wins";
        body.insertBefore(winner, container)
        // alert('You Win!!');
        setTimeout(function() {
            alert("You Win!");
        },10)
        resetGame();
    }
    else if (computerScore === 5) {
        winner.textContent = 'Computer Wins';
        body.insertBefore(winner, container);
        // alert('You Lose SUCKA!');
        setTimeout(function() {
            alert("Computer Wins");
        },10)
        resetGame();
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
sPlayerChoice.src = 'Images/blank.jpg';
left.appendChild(sPlayerChoice);

sComputerChoice = document.createElement('img');
sComputerChoice.classList.add('computerChoice');
sComputerChoice.src = 'Images/blank.jpg';
right.insertBefore(sComputerChoice, rHeader);

result = document.createElement('div');
result.classList.add('results');
result.textContent = 'Results';
body.insertBefore(result, container);

sPlayerScore = document.createElement('div');
sPlayerScore.classList.add('sPlayerScore');
sPlayerScore.textContent = playerScore;
left.insertBefore(sPlayerScore, lHeader)

sComputerScore = document.createElement('div');
sComputerScore.classList.add('sComputerScore');
sComputerScore.textContent = computerScore;
right.appendChild(sComputerScore);

winner = document.createElement('div');
winner.classList.add('winner');
winner.textContent = '\\\\\\ Good Luck!! ///';
body.insertBefore(winner, container);
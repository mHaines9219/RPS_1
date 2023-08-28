
let choiceArray = ['ROCK', 'PAPER', 'SCISSOR'];
let computerNum = computerChoice(3);
let computerPick = choiceArray[computerNum];
let computerChoiceDisplay = document.getElementById('computer-choice');
let userChoiceDisplay = document.getElementById('user-choice');
let resultDisplay = document.getElementById('result');
const rockButton = document.getElementById('ROCK');
const paperButton = document.getElementById('PAPER');
const scissorButton = document.getElementById('SCISSOR');

rockButton.addEventListener('click', handleButtonClick);
paperButton.addEventListener('click', handleButtonClick);
scissorButton.addEventListener('click', handleButtonClick);


function computerChoice(max) {
return Math.floor(Math.random() * max)
}

function handleButtonClick(event) {
  if(event.target.tagName === 'BUTTON'){ // Retrieve the 'id' attribute of the clicked button
    const buttonId = event.target.id;
    if (computerPick === buttonId){
    computerChoiceDisplay.innerHTML = computerPick 
    userChoiceDisplay.innerHTML = buttonId;
    resultDisplay.innerHTML = "It's a tie!";}

        else if (computerPick === 'ROCK' && buttonId === 'PAPER' ||
        computerPick === 'PAPER' && buttonId === 'SCISSOR' ||
        computerPick === 'SCISSOR' && buttonId === 'ROCK')
{
    computerChoiceDisplay.innerHTML = computerPick 
    userChoiceDisplay.innerHTML = buttonId;
    resultDisplay.innerHTML = " You've beaten the computer!"
}
        else if (computerPick === 'ROCK' && buttonId === 'SCISSOR' ||
                computerPick === 'PAPER' && buttonId === 'ROCK' ||
                computerPick === 'SCISSOR' && buttonId === 'PAPER')
        {
            computerChoiceDisplay.innerHTML = computerPick 
    userChoiceDisplay.innerHTML = buttonId;
            resultDisplay.innerHTML = "You've been beaten by the computer!"      ;
  }
}


}

;
const userScore = 0;
const computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-band');
const result_p = document-querySelector('.result>p');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.randon() *3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === 'r') return "Rock";
    if(letter === 'p') return "Paper";
    return "Scissors";
}



function main() {
    rock_div.addEventListener('click', function(){
        Gamepad('r');
    })

    paper_div.addEventListener('click', function(){
        
    })
}

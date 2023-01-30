'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.score').textContent = '40';
document.querySelector('.highscore').textContent = '100';
document.querySelector('.guess').value = 30; */

// Handle Click Event

const secrectNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secrectNumber;
let score = 20;
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

//btn Check click
btnCheck.addEventListener('click', function () {
  const guessNumber = +document.querySelector('.guess').value;
  // When no number in input
  if (!guessNumber) {
    document.querySelector('.message').textContent = '😢 No Number';
  }
  //When player win
  else if (guessNumber === secrectNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secrectNumber;
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30' + 'rem';
  }
  // When guessNumber too high
  else if (guessNumber > secrectNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⚡ Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // When guessNumber too low
  else if (guessNumber < secrectNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '👇 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//btn Again click
btnAgain.addEventListener('click', function () {
  const score = 20;
  const secrectNumber = Math.trunc(Math.random() * 20) + 1;

  document.body.style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = '0';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15' + 'rem';
  document.querySelector('.guess').value = null;
});

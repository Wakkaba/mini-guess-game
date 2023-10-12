'use strict';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
});

if (guess === secretNumber) {
  document.querySelector('.message').textContent = '🎉 Correct Number!';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
} else if (guess !== secretNumber) {
  if (score > 1) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = '💥 You Lost The Game!';
    document.querySelector('.score').textContent = 0;
  }
}

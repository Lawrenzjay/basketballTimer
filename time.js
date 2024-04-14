let countdownTimer = document.getElementById('countdownTimer');
let shotClock = document.getElementById('shotClock');
let homeScoreDisplay = document.getElementById('homeScore');
let awayScoreDisplay = document.getElementById('awayScore');

let countdownTime = 600;
let shotTime = 24; 
let homeScore = 0;
let awayScore = 0;
let countdownInterval;
let shotClockInterval;

function startCountdown() {
  countdownInterval = setInterval(() => {
    countdownTime--;
    let minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;
    countdownTimer.textContent = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    if (countdownTime <= 0) {
      clearInterval(countdownInterval);
        let buzzerSound = document.getElementById('buzzer3Sound');
        buzzerSound.play();
        let buzzer4sound = document.getElementById('buzzer4Sound');
        buzzer4sound.play();
    if (homeScore > awayScore) {
      alert('END OF THE QUARTER WITH FAVOR OF TEAM 1 WITH THE SCORE OF:'+ homeScore)
    } else if (awayScore > homeScore) {
      alert('END OF THE QUARTER WITH FAVOR OF TEAM 2 WITH THE SCORE OF:'+ awayScore)
    } else {
      alert('TIE GAME WITH THE SCORE OF:'+ homeScore)
    }
    }
  }, 1000);
}
let resetScores = () => {
  homeScore = 0;
  awayScore = 0;
  homeScoreDisplay.textContent = homeScore;
  awayScoreDisplay.textContent = awayScore;
};

function setCountdownTime() {
  let minutesInput = parseInt(document.getElementById('minutesInput').value);
  let secondsInput = parseInt(document.getElementById('secondsInput').value);
  countdownTime = minutesInput * 60 + secondsInput;
  let minutes = Math.floor(countdownTime / 60);
  let seconds = countdownTime % 60;
  countdownTimer.textContent = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

function pauseCountdown() {
  clearInterval(countdownInterval);
  document.getElementById('pauseCountdown').disabled = true;
  document.getElementById('continueCountdown').disabled = false;
  clearInterval(shotClockInterval);
  document.getElementById('pauseShotClock').disabled = true;
  document.getElementById('continueShotClock').disabled = false;
}

function continueCountdown() {
  startCountdown();
  document.getElementById('pauseCountdown').disabled = false;
  document.getElementById('continueCountdown').disabled = true;
  startShotClock();
  document.getElementById('pauseShotClock').disabled = false;
  document.getElementById('continueShotClock').disabled = true;
}
function setTimeout() {

}

function startShotClock() {
  shotClockInterval = setInterval(() => {
    shotTime--;
    if (countdownTime < 24) {
      clearInterval(shotClockInterval);
    }
    if (shotTime < 1) {
      shotTime = 24;
      let buzzer2Sound = document.getElementById('buzzer2Sound');
    buzzer2Sound.play();
    }
    shotClock.textContent = shotTime;
  }, 1000);
}

function resetShotClock() {
  shotTime = 24;
  shotClock.textContent = shotTime;
}

function resetShotClock14() {
  shotTime = 14;
  shotClock.textContent = shotTime;
}

function addScore(team) {
  if (team === 'home') {
    homeScore++;
    homeScoreDisplay.textContent = homeScore;
  } else if (team === 'away') {
    awayScore++;
    awayScoreDisplay.textContent = awayScore;
  }
}
function subtractScore(team) {
  if (team === 'home') {
    homeScore--;
    homeScoreDisplay.textContent = homeScore; 
  } else if (team === 'away') {
    awayScore--;
    awayScoreDisplay.textContent = awayScore;
  }
}

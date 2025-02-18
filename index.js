let scoreHome = document.getElementById("score-home");
let scoreAway = document.getElementById("score-away");

let currentScoreHome = 0;
let currentScoreAway = 0;

let minutes = 12;
let seconds = 0;
let quarter = 1;
let timerRunning = false;
let timerInterval;


function updateScore(team, points) {
  if (team === 'home') {
  currentScoreHome += points
  scoreHome.textContent = currentScoreHome
} else if (team === 'away')
  currentScoreAway += points
  scoreAway.textContent = currentScoreAway
}

function updateTimerDisplay() {
    let formattedMinutes = minutes.toString().padStart(2, "0");
    let formattedSeconds = seconds.toString().padStart(2, "0");
    document.getElementById("timer-display").textContent = `${formattedMinutes}:${formattedSeconds}`;
}

// Function to start the timer
function startTimer() {
    if (!timerRunning && quarter <= 4) {
        timerRunning = true;
        timerInterval = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timerInterval);
                    timerRunning = false;
                    nextQuarter();
                } else {
                    minutes--;
                    seconds = 59;
                }
            } else {
                seconds--;
            }
            updateTimerDisplay();
        }, 1000);
    }
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

// Function to move to the next quarter or end the game
function nextQuarter() {
    if (quarter < 4) {
        quarter++;
        document.getElementById("number-of-quarters").textContent = quarter;
        minutes = 12;
        seconds = 0;
        updateTimerDisplay();
        
    } else {
        document.getElementById("timer-display").textContent = "00:00";
    }
}

// Function to reset everything
function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    minutes = 12;
    seconds = 0;
    quarter = 1;

    // Reset the quarter display
    document.getElementById("number-of-quarters").textContent = quarter;

    // Reset the timer display
    updateTimerDisplay();

    // Reset the scores correctly
    scoreHome.textContent = currentScoreHome;
    scoreAway.textContent = currentScoreAway;
    
    currentScoreHome = 0; 
    currentScoreAway = 0;
}

// Initialize the timer display when the page loads
updateTimerDisplay();

console.log(plusThreeHome)
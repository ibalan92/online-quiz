var timerEl = document.getElementById('time');
var startButton = document.querySelector('#start');
var listOfQuestions = [quizQuestion1, quizQuestion2, quizQuestion3]

//Timer function 
function timer(){
    var timeLeft = 10;
    var timeInterval = setInterval(function (){
        if (timeLeft > -1){
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    },1000);
}

//Clear Screen function
function clearScreen() {
    timer();
    var x = document.getElementById("start-screen");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

startButton.addEventListener("click",clearScreen)
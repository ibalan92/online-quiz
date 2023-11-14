var timerEl = document.getElementById('time');
var startButton = document.querySelector('#start');
var questionEl = document.querySelector('#question-title');
var listOfQuestions = [quizQuestion1, quizQuestion2, quizQuestion3];
var choicesEl = document.getElementById('choices');
var answersEl = document.createElement("ol");
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");

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

function showQuestion(){
    clearScreen();
    for(var i = 0; i<listOfQuestions.length;i++){
        questionEl.textContent = listOfQuestions[i].question;

        answer1.textContent = listOfQuestions[i].choices[0];
        answer2.textContent = listOfQuestions[i].choices[1];
        answer3.textContent = listOfQuestions[i].choices[2];
        answer4.textContent = listOfQuestions[i].choices[3];
        choicesEl.appendChild(answersEl);
        answersEl.appendChild(answer1);
        answersEl.appendChild(answer2);
        answersEl.appendChild(answer3);
        answersEl.appendChild(answer4);

    }
}

startButton.addEventListener("click",showQuestion)
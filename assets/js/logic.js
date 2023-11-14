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
    var x = document.getElementById("start-screen");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

var questionIndex = 0; 

function showQuestion(){
    timer();
    clearScreen();
        questionEl.textContent = listOfQuestions[questionIndex].question;
        answer1.textContent = listOfQuestions[questionIndex].choices[0];
        answer2.textContent = listOfQuestions[questionIndex].choices[1];
        answer3.textContent = listOfQuestions[questionIndex].choices[2];
        answer4.textContent = listOfQuestions[questionIndex].choices[3];
        choicesEl.appendChild(answersEl);
        answersEl.appendChild(answer1);
        answersEl.appendChild(answer2);
        answersEl.appendChild(answer3);
        answersEl.appendChild(answer4);
        var chosenAnswer = "";
        answer1.addEventListener("click", function() {
            chosenAnswer = answer1.textContent;
            console.log(chosenAnswer)
        })
        answer2.addEventListener("click", function() {
            chosenAnswer = answer2.textContent;
            console.log(chosenAnswer)
        })
        answer3.addEventListener("click", function() {
            chosenAnswer = answer3.textContent;
            console.log(chosenAnswer)
        })
        answer4.addEventListener("click", function() {
            chosenAnswer = answer4.textContent;
            console.log(chosenAnswer)
        })

}



startButton.addEventListener("click",showQuestion)
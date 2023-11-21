var timerEl = document.getElementById('time');
var startButton = document.querySelector('#start');
var questionEl = document.querySelector('#question-title');
var submitButton = document.querySelector('#submit');
var initialsEl = document.querySelector("#initials");
var listOfQuestions = [quizQuestion1, quizQuestion2, quizQuestion3];
var choicesEl = document.getElementById('choices');
var answersEl = document.createElement("ol");
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");
var answerResult = document.getElementById("AnswerResult")
var timeLeft = 120;
var timeInterval;
var finalScore = document.getElementById("final-score");
var players = JSON.parse(localStorage.getItem("players")) || [];



//Timer function 
function timer(){
    
    timeInterval = setInterval(function (){
        if (timeLeft > -1){
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
        else {
            questionsEl.setAttribute("class", "hide");
            var x = document.getElementById("end-screen");
            x.classList.remove("hide");
            timerEl.textContent = "0";
            finalScore.textContent = "0"; 
            clearInterval(timeInterval);
        }
    },1000);
}

function stopTimer(){
    clearInterval(timeInterval);
}

//Clear Screen function
function clearScreen() {
    var x = document.getElementById("start-screen");
    x.setAttribute("class", "hide");
  }

var questionIndex = 0; 

answer1.addEventListener("click", function() {
    checkAnswer(answer1.textContent);
})
answer2.addEventListener("click", function() {
    checkAnswer(answer2.textContent);
})
answer3.addEventListener("click", function() {
    checkAnswer(answer3.textContent);
})
answer4.addEventListener("click", function() {
    checkAnswer(answer4.textContent);
})
var questionsEl = document.getElementById("questions");
function showQuestion(){
    clearScreen();
    
questionsEl.classList.remove("hide");
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
}

function showNextQuestion() {
    if(timeLeft > 0){
        questionIndex++;
        if(questionIndex < listOfQuestions.length){
            showQuestion();
        }
        else{
            stopTimer();
            questionsEl.setAttribute("class", "hide");
            var x = document.getElementById("end-screen");
            x.classList.remove("hide");
            finalScore.textContent = timerEl.textContent; 
        }
    }
    else {
        stopTimer();
        questionsEl.setAttribute("class", "hide");
        var x = document.getElementById("end-screen");
        x.classList.remove("hide");
        timerEl.textContent = "0";
        finalScore.textContent = "0";
    }
}

function checkAnswer(chosenAnswer){
    console.log(chosenAnswer)
    if(chosenAnswer === listOfQuestions[questionIndex].answer)
    {
    answerResult.textContent = "Correct!";
    answerResult.style.color = "green";
    }
    else{
        answerResult.textContent = "Incorrect!"
        timeLeft -= 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
        answerResult.style.color = "red";
    }
    setTimeout(function () {
        showNextQuestion();
    }, 1000);
}

startButton.addEventListener("click",timer)
startButton.addEventListener("click",showQuestion)


submitButton.addEventListener("click",function (event){
    event.preventDefault();
    var initials = document.getElementById("initials").value.trim();
    var player = {
        initials: initials,
        score: finalScore.textContent
    };
    console.log(player);
    if(player.initials === ""){
        return;
    }

    players.push(player);
    localStorage.setItem("players", JSON.stringify(players));
    console.log(players);
    window.location.href = "highscores.html";
} );


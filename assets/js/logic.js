var timerEl = document.getElementById('time');
var startButton = document.querySelector('#start');
var questionEl = document.querySelector('#question-title');
var submitButton = document.querySelector('#submit');
var initialsEl = document.querySelector("#initials");
var listOfQuestions = [quizQuestion1, quizQuestion2, quizQuestion3, 
                        quizQuestion4, quizQuestion5, quizQuestion6,
                        quizQuestion7, quizQuestion8, quizQuestion9, quizQuestion10];
var questionIndex = 0;
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById('choices');
var answersEl = document.createElement("ol");
//Creates 4 buttons for the answers
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");

var answerResult = document.getElementById("AnswerResult")
var timeLeft = 200;
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

//Stop timer function
function stopTimer(){
    clearInterval(timeInterval);
}

//Clear Initital Screen function
function clearScreen() {
    var x = document.getElementById("start-screen");
    x.setAttribute("class", "hide");
  } 

//Event listeners when an answer is chosen
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
//Function to show a question 
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
//Function to move to the next question 
function showNextQuestion() {
    //if there is time left show the next question
    if(timeLeft > 0){
        questionIndex++;
        if(questionIndex < listOfQuestions.length){
            showQuestion();
        }//if we are at the end of the quizz save the final score
        else{
            stopTimer();
            questionsEl.setAttribute("class", "hide");
            var x = document.getElementById("end-screen");
            x.classList.remove("hide");
            finalScore.textContent = timerEl.textContent; 
        }
    }//if the time has finished make the score 0
    else {
        stopTimer();
        questionsEl.setAttribute("class", "hide");
        var x = document.getElementById("end-screen");
        x.classList.remove("hide");
        timerEl.textContent = "0";
        finalScore.textContent = "0";
    }
}
//Function to check the answer
function checkAnswer(chosenAnswer){
    if(chosenAnswer === listOfQuestions[questionIndex].answer)
    {
    answerResult.textContent = "Correct!";
    answerResult.style.color = "green";
    }
    else{
        answerResult.textContent = "Incorrect!"
        //for incorrect answer substract 10 seconds and check if there is still time otherwise set the time to 0
        timeLeft -= 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
        answerResult.style.color = "red";
    }//timeout function to slow solve the calling of the next question function before it gets to check the answers
    setTimeout(function () {
        showNextQuestion();
    }, 1000);
}
//start timer and show the first question once the start button is pressed
startButton.addEventListener("click",timer)
startButton.addEventListener("click",showQuestion)

//Store the initials of the player and score into an object to be added to an array which is stored in the local storage 
submitButton.addEventListener("click",function (event){
    event.preventDefault();
    var initials = document.getElementById("initials").value.trim();
    var player = {
        initials: initials,
        score: finalScore.textContent
    };
    //if the player does not input any initials the code won't go further
    if(player.initials === ""){
        return;
    }

    players.push(player);
    localStorage.setItem("players", JSON.stringify(players));
    window.location.href = "highscores.html";
} );




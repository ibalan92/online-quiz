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
var answerResult = document.getElementById("AnswerResult")
var timeLeft = 120;
//Timer function 
function timer(){
    
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
    x.setAttribute("class", "hide")
  }

var questionIndex = 0; 

function showQuestion(){
    timer();
    clearScreen();
    var questionsEl = document.getElementById("questions");
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
}

function showNextQuestion() {
    questionIndex++;
    clearScreen();
    if(questionIndex < listOfQuestions.length){
        showQuestion();
    }
    else{
        clearScreen();
        console.log("Input Initials")
    }
}

function checkAnswer(chosenAnswer){
    console.log(chosenAnswer)
    if(chosenAnswer === listOfQuestions[questionIndex].answer)
    {
    answerResult.textContent = "Correct!";
    answerResult.setAttribute("class", "text-success");
    
    }
    else{
        answerResult.textContent = "Incorrect!"
        answerResult.setAttribute("class", "text-danger");
    }
    showNextQuestion();
}




startButton.addEventListener("click",showQuestion)
var timerEl = document.getElementById('time');
var startButton = document.querySelector('#start');

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

startButton.addEventListener("click",timer)
var playersList = document.querySelector("#highscores");
var players = JSON.parse(localStorage.getItem("players")) || [];
var clearButton = document.querySelector("#clear");

//Function to display the players and their score and creating them dynamically 
function renderPlayers() { 
  
    for (var i = 0; i < players.length; i++) {
      var player = players[i];
  
      var li = document.createElement("li");
      li.textContent = player.initials + " - " + player.score;
      playersList.appendChild(li);
    }
  }

  renderPlayers();

  //Clear the highscores when the button clear button is pressed
  clearButton.addEventListener("click",function(event){
    event.preventDefault();
    localStorage.clear();
    playersList.remove();
  })

  
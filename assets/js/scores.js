var playersList = document.querySelector("#highscores");
var players = JSON.parse(localStorage.getItem("players")) || [];
console.log(players);

var clearButton = document.querySelector("#clear");

function renderPlayers() { 
  
    for (var i = 0; i < players.length; i++) {
      var player = players[i];
  
      var li = document.createElement("li");
      li.textContent = player.initials + " - " + player.score;
      playersList.appendChild(li);
    }
  }

  renderPlayers();

  clearButton.addEventListener("click",function(event){
    event.preventDefault();
    localStorage.clear();
    playersList.remove();
  })

  
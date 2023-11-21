var playersList = document.querySelector("#highscores");
var players = JSON.parse(localStorage.getItem("players")) || [];
console.log(players);



function renderPlayers() { 
  
    for (var i = 0; i < players.length; i++) {
      var player = players[i];
  
      var li = document.createElement("li");
      li.textContent = player.initials + " - " + player.score;
      playersList.appendChild(li);
    }
  }

  renderPlayers();

  
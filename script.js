const footballTeam = {
  team :'Mazembe',
  year:2012,
  headCoach: "lamine Mamadou N'Diaye",
  players: [{name:'Mputu Tresore', position:'forward',isCaptain: true},{name:'Robert Kidiaba', position: 'goalkeeper', isCaptain: false},{name:'Kimwaki Joel', position:'defender', isCaptain: false},{name:'Kalityuka Dioko', position: 'forward', isCaptain: false},{name:'lay Matampi', position:'goalkeeper', isCaptain: false},{name:'Stopila Sunzu', position:'defender',isCaptain: false},{name:'Ntambwe Ilunga', position:'midfielder',isCaptain: false}]
};

document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;
document.getElementById("head-coach").textContent = footballTeam.headCoach;


// displaying the coach, team and year value on the page

const playerCardsContainer = document.getElementById("player-cards");
const filterSelect = document.getElementById("players");


// Create a player card element
function createPlayerCard(player) {
  const card = document.createElement("div");
  card.className = "player-card";
  card.dataset.position = player.position;  // store position for filtering

  // Show captain in name if isCaptain is true
  const captainText = player.isCaptain ? "(Captain) " : "";

  card.innerHTML = `
    <h2>${captainText}${player.name}</h2>
    <p>Position: ${player.position}</p>
  `;
  return card;
}

// Display players filtered by position or all players
function displayPlayers(filter = "all") {
  playerCardsContainer.innerHTML = "";

  const filteredPlayers = filter === "all"
    ? footballTeam.players
    : footballTeam.players.filter(player => player.position === filter);

  filteredPlayers.forEach(player => {
    const card = createPlayerCard(player);
    playerCardsContainer.appendChild(card);
  });
}

// Initial display with all players
displayPlayers();

// Listen for filter changes
filterSelect.addEventListener("change", (e) => {
  displayPlayers(e.target.value);
});
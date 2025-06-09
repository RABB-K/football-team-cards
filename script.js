const footballTeam = {
  team :'Mazembe',
  year:2010,
  headCoach: "lamine Mamadou N'Diaye",
  players: [{name:'Mputu Tresore', position:'forward',number: 8,photo:'',isCaptain: true},
    {name:'Robert Muteba Kidiaba', position: 'goalkeeper',number:1,photo:"images/kidiaba.webp",isCaptain: false},
    {name:'Kalililo Kakonje', position:'goalkeeper', isCaptain: false},
    {name:'Aimé Bakula ', position:'goalkeeper', isCaptain: false},
    {name:'Leopold Bagnack ', position:'defender', isCaptain: false},
    {name:'Kanyimbo Tshizeu ', position:'defender', isCaptain: false},
    {name:'Tshani Mukinayi ', position:'defender',number:2,photo:"images/hichani.webp", isCaptain: false},
    {name:'Hichani Himoonde ', position:'defender',isCaptain: false},
    {name:'Sita Lebrun Milandu ', position:'defender', isCaptain: false},
    {name:'Ngandu Kasongo ', position:'forward', isCaptain: false},
    {name:'Luyeye Mvete ', position:'forward', isCaptain: false},
    {name:'Serge Lofo Bongeli ', position:'forward', isCaptain: false},
    {name:'Marcelin Tamboulas ', position:'forward', isCaptain: false},
    {name:'Kimwaki Joel', position:'defender',number:3,photo:"images/kimwaki.webp", isCaptain: false},
    {name:'Kalityuka Dioko', position: 'forward', isCaptain: false},
    {name:'lay Matampi', position:'goalkeeper', isCaptain: false},
    {name:'Stopila Sunzu', position:'defender',number:5,photo:"images/stopila.webp",isCaptain: false},
    {name:'Ntambwe Ilunga', position:'midfielder',isCaptain: false},
    {name:'Déo Kanda', position:'midfielder', isCaptain: false},
    {name:'Given Singuluma', position:'midfielder', isCaptain: false},
    {name:'Guy Lusadisu ', position:'midfielder',number:6,photo:"images/glady_bokese.webp", isCaptain: false}
  ]
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
  card.dataset.position = player.position;

  const captainText = player.isCaptain ? "(Captain) " : "";

  const photoSrc = player.photo ? player.photo : "images/default_user.png";

  card.innerHTML = `
    <img 
      src="${photoSrc}" 
      alt="${player.name}" 
      class="player-photo"
      onerror="this.onerror=null;this.src='images/default_user.png';"
    >
    <h2>${captainText}${player.name}</h2>
    <p>Number: #${player.number}</p>
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
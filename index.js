
// List of Base Drinks & Mixers
let baseSpirits = [
    {name: "Vodka", ac : 35},
    {name: "Whiskey", ac : 30},
    {name: "Bourbon", ac : 40},
    {name: "Tequila", ac : 45},
    {name: "Gin", ac : 45},
    {name: "Rum", ac : 30},
    {name: "Brandy", ac : 25},
    {name: "Beer", ac : 7},
    {name: "Wine", ac : 10},
    {name: "Scotch", ac : 42},
    ];

let baseMixers = [
    {name: "Coke"},
    {name: "Cranberry Juice"},
    {name: "Orange Juice"},
    {name: "Tonic"},
    {name: "Red Bull"},
    {name: "Iced Tea"},
    {name: "Cold Brew"},
    {name: "Pineapple Juice"},
    {name: "Coconut Water"},
    {name: "Ginger Ale"},
        ];
        // Random Number Generator for Spirits/Mixers
        function generateRandomNumber(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get Name Function
function getName(array) {
  const index = generateRandomNumber(0, array.length - 1);
  return array[index];
}

let baseSpiritsOpt;
let baseMixersOpt;


// Audio
const textWrapper = document.querySelector(".text_wrapper");
let audioTick = new Audio('audio/tick.wav');
function playTick(){
  audioTick.play()
};
let audioVomit = new Audio('audio/vomit.mp3')
let audioPour = new Audio('audio/pouring_drink.wav');
let audioClink = new Audio('audio/glass_tink.mp3');
function playPour(){
  audioPour.play()
  setTimeout(function() {
    audioClink.play()
  }, 3000);
};
let backgroundAudio = new Audio('audio/chatter.mp3');
let backgroundMusic = new Audio('audio/tavern_music.mp3');
let diceRollAudio = new Audio('audio/dice_roll.wav');
function backgroundAudioPlay(){
  backgroundMusic.volume = 0.05
  backgroundAudio.volume = 0.05
  backgroundMusic.loop = true
  backgroundAudio.loop = true
  backgroundMusic.play()
  backgroundAudio.play()
};
backgroundAudioPlay();
function setVolume(volume){
  backgroundAudio.volume = volume
  backgroundMusic.volume = volume
};

// Shuffle Options
function shuffleOptions(){
  playTick()
  textWrapper.innerHTML = ""
  baseSpiritsOpt = getName(baseSpirits);
  baseMixersOpt =  getName(baseMixers);
  spiritsAc = baseSpiritsOpt.ac

  const results = document.createElement("p");
  results.textContent = `${baseSpiritsOpt.name} and ${baseMixersOpt.name}`
  textWrapper.appendChild(results)
  return spiritsAc
}

// Select Number of Players
let players = []
let selectedNumber;
const dimmer = document.querySelector(".dimmer")
dimmer.classList.add("active")
const selectPlayersWrapper = document.querySelector(".select_player_wrapper")
selectPlayersWrapper.classList.add("active")
const playersWrapper = document.querySelector(".player_wrapper")
const onePlayerButton = document.getElementById("one_player_button")
const twoPlayerButton = document.getElementById("two_player_button")
const confirmButton = document.getElementById("confirm_button")
confirmButton.addEventListener("click", () => {
  if (selectedNumber > 0) {
    dimmer.classList.remove("active")
    selectPlayersWrapper.classList.remove("active")
    getPlayers();
  } else {
  }
})

onePlayerButton.addEventListener("click", () =>{
  selectedNumber = 1
  console.log(selectedNumber)
  return(selectedNumber)
})
twoPlayerButton.addEventListener("click", () =>{
  selectedNumber = 2
  return(selectedNumber)
})

function getPlayers() {
  for(let n = 0; n < selectedNumber; n++) {
    console.log(n)
    const playerContainer = document.createElement("div")
    playerContainer.classList.add(`player_${n}`)
    playerContainer.classList.add(`player_info`)
    const player = document.createElement("p")
    const playerName = `player_${n}`
    player.textContent = `Player ${[n + 1]}`
    playersWrapper.appendChild(player)
    const playerMeter = document.createElement("meter")
    playerMeter.classList.add(`meter_${n}`)
    playerMeter.max = 200
    playerMeter.value = 0
    playerContainer.appendChild(player)
    playerContainer.appendChild(playerMeter)
    playersWrapper.appendChild(playerContainer)
    players.push(playerName)
  } 
  return players
}

// Player Turns
let turnNumber = 0
function playerTurns() {
  turnNumber += 1
  console.log(turnNumber + "Turn Check")
  return turnNumber
}
let playerTurnInd
function checkPlayerTurn() {
playerTurns()
  console.log(players.length + "Player len")
  if(turnNumber % players.length === 0) {
    playerTurnInd = players.length
    console.log(playerTurnInd + "if check")
    return playerTurnInd
  } else {
    playerTurnInd = turnNumber % players.length
    console.log(playerTurnInd + "else check")
    return playerTurnInd
  }
}
  
// Player Intoxication
let spiritsAc;

function checkIntoxication() {
  checkPlayerTurn()
  console.log(playerTurnInd + "intox check")
  const currentMeter = document.querySelector(`.meter_${playerTurnInd -1}`)
  currentMeter.value += spiritsAc
  if (currentMeter.value >= 200) {
    audioVomit.play()
    let pageContainer = document.querySelector(".page_container");
    pageContainer.style.opacity = "0%";
    setTimeout(function() {
      pageContainer.innerHTML = "";
      let thanksMessageWrapper = document.createElement("div");
      thanksMessageWrapper.classList.add("thanks_message_wrapper")
      let thanksMessageText = document.createElement("p");
      thanksMessageText.textContent = "You are Intoxicated!\nThanks for playing!";
      thanksMessageWrapper.appendChild(thanksMessageText);
      pageContainer.appendChild(thanksMessageWrapper);
      setTimeout(function() {
        pageContainer.style.opacity ="100%";
      }, 2000)
    }, 2000)
  };
}
// Start Button
const startBtn = document.getElementById("start");
startBtn.addEventListener("click", () => {
  startBtn.disabled = true
  diceRollAudio.play()
  shuffleOptions
  setTimeout(function() {
    shuffleOptions()
    setTimeout(function() {
      shuffleOptions()
      setTimeout(function() {
        shuffleOptions()
        setTimeout(function() {
          shuffleOptions()
          setTimeout(function() {
            shuffleOptions()
            setTimeout(function() {
              shuffleOptions()
              setTimeout(function() {
                shuffleOptions()
                setTimeout(function() {
                  shuffleOptions()
                  setTimeout(function() {
                    shuffleOptions()
                    setTimeout(function() {
                      shuffleOptions()
                      setTimeout(function() {
                        startBtn.disabled = false
                        shuffleOptions()
                        setTimeout(function() {
                          checkIntoxication()
                          playPour()
                        }, 500);
                      }, 1500);
                    }, 1000);
                  }, 500);
                }, 250);
              }, 250);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  }, 50);
})

//Log out Button
const logOutBtn = document.getElementById("log_out")
logOutBtn.addEventListener("click", () => {
  alert("Success: Logged out")
  window.location.href = "login.html"
})



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
  console.log(baseSpiritsOpt)
  spiritsAc = baseSpiritsOpt.ac
  console.log(spiritsAc)
  const results = document.createElement("p");
  results.textContent = `${baseSpiritsOpt.name} and ${baseMixersOpt.name}`
  textWrapper.appendChild(results)
  return spiritsAc
}

// Select Number of Players
let players = [];
let selectedNumber;
const dimmer = document.querySelector(".dimmer")
dimmer.classList.add(".active")
const selectPlayersWrapper = document.querySelector(".select_player_wrapper")
selectPlayersWrapper.classList.add(".active")
const playersWrapper = document.querySelector(".player_wrapper")
const onePlayerButton = document.getElementById("one_player_button")
const twoPlayerButton = document.getElementById("two_player_button")
onePlayerButton.addEventListener("click", () =>{
  dimmer.classList.remove(".active")
  selectedNumber = 1
  selectPlayersWrapper.classList.remove(".active")
  return(selectedNumber)
})
twoPlayerButton.addEventListener("click", () =>{
  dimmer.classList.remove(".active")
  selectPlayersWrapper.classList.remove(".active")
  selectedNumber = 2
  return(selectedNumber)
})


function getPlayers(selectedNumber) {
  for(let n = 0; n < selectedNumber; n++) {
    const player[n] = document.createElement("p")
    player[n].textContent = "player One"
    playersWrapper.appendChild(player[n])
  }  
}

// Player Intoxication
const playerIntoxicationMeter = document.getElementById("intoxication_meter");
playerIntoxicationMeter.value = 0;
let playerIntoxication = 0;
let spiritsAc;

function checkIntoxication() {
  playerIntoxication += spiritsAc
  console.log(spiritsAc)
  playerIntoxicationMeter.value += spiritsAc
  if (playerIntoxication >= 200) {
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

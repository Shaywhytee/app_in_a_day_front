
// List of Base Drinks & Mixers
let baseSpirits = [
    {name: "Vodka"},
    {name: "Whiskey"},
    {name: "Bourbon"},
    {name: "Tequila"},
    {name: "Gin"},
    {name: "Rum"},
    {name: "Brandy"},
    {name: "Beer"},
    {name: "Wine"},
    {name: "Scotch"},
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
  return array[index].name;
}

let baseSpiritsOpt;
let baseMixersOpt;


// Audio
const textWrapper = document.querySelector(".text_wrapper");
let audioTick = new Audio('audio/tick.wav');
function playTick(){
  audioTick.play()
};
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
  const results = document.createElement("p");
  results.textContent = `${baseSpiritsOpt} and ${baseMixersOpt}`
  textWrapper.appendChild(results)
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

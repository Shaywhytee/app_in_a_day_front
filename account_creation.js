//Account Creation Variables

const emailInput = document.querySelector(".email_input")
const passwordInput = document.querySelector(".password_input")
const vPasswordInput = document.querySelector(".vpassword_input")

//   Account Creation Fetch Call
const createAccountBtn = document.getElementById("create_account_btn")
createAccountBtn.addEventListener("click", () => {  
  if (passwordInput.value != vPasswordInput.value) {
    alert("Error: Passwords do not match!")
  
  } else {
    fetch("http://127.0.0.1:5000/account/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_email: emailInput.value,
        user_password: passwordInput.value
      })
    })
    .then(response => {
      if (response.ok) {
        window.location.href= "login.html"
        alert("New account created!")
      } else {
        throw new Error("Account creation failed! Please try again..."), alert("Account creation failed")
      }
    }) 
    .catch(error => {
      console.log("Error:", error)
    })
  }  
});

  
  // Back to login button
  const rtnToLogin = document.getElementById("rtn_to_login")
  rtnToLogin.addEventListener("click", () => {
    window.location.href= "login.html"
  })

// Audio

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
backgroundAudioPlay()
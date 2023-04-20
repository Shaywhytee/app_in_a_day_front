// Random Number Generator for Spirits/Mixers
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1;
const max = 10;
const baseDrinkOpt = generateRandomNumber(min, max);
const baseMixersOpt = generateRandomNumber(min, max);

console.log(baseDrinkOpt);
console.log(baseMixersOpt);


loginButton.addEventListener("click", function() {
    const email = emailInput.value;
    const password = passwordInput.value;
  
    // Login Fetch
    fetch("http://127.0.0.1:5000/login", {
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
        alert("Login was succesful!")
        window.location.href="/index"
      } else {
        throw new Error("Login failed, please try again");
      }
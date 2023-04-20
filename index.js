// List of Base Drinks & Mixers
let baseDrink = [
    {name: "Vodka"},
    {name: "Whiskey"},
    {name: "Burdoun"},
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
    })
    .catch(error => {
      console.error("Error:", error);
    });
  });


//   Account Creation Fetch Call
accountButton.addEventListener("click", () => {
    const newEmail = emailInput.value;
    const newPassword = passwordInput.value;
    const verfNewPassword = verfNewPasswordInput.value;

    if (passwordInput.value != verfNewPassword.value) {
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
            .then(response => {
                if (response.ok) {
                    alert("New account created!")
                    window.location.href=("/login")
                } else {
                    throw new Error("Account creation failed! Please try again...")
                }
            }) 
            .catch(error => {
                console.log("Error:", error)
            })
        })
      }  
    });
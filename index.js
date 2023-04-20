// List of Base Spirits & Mixers
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

const baseSpiritsOpt = getName(baseSpirits);
const baseMixersOpt = getName(baseMixers);

console.log(baseSpiritsOpt);
console.log(baseMixersOpt);


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


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

let baseSpiritsOpt
let baseMixersOpt 

console.log(baseSpiritsOpt);
console.log(baseMixersOpt);


const textWrapper = document.querySelector(".text_wrapper");

// Start Button
const startBtn = document.getElementById("start");
startBtn.addEventListener("click", () => {
   textWrapper.innerHTML = ""
    baseSpiritsOpt = getName(baseSpirits);
    baseMixersOpt =  getName(baseMixers);
    const results = document.createElement("p");
    results.textContent = `${baseSpiritsOpt} and ${baseMixersOpt}`
   textWrapper.appendChild(results)
})

//Log out Button
const logOutBtn = document.getElementById("log_out")
logOutBtn.addEventListener("click", () => {
  alert("Success: Logged out")
  window.location.href = "login.html"
})


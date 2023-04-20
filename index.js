// Random Number Generator for Spirits/Mixers
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1;
const max = 10;
const baseDrink = generateRandomNumber(min, max);
const baseMixers = generateRandomNumber(min, max);

console.log(baseDrink);
console.log(baseMixers);






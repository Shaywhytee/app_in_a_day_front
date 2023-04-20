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






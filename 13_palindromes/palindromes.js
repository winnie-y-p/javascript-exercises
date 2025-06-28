const palindromes = function (str) {
const arr = str.replaceAll(/[^\w]|_/g, "").toLowerCase().split("");

for (let i = 0; i < arr.length/2; i++) {
    if (arr.shift() === arr.pop()) {
        arr.shift();
        arr.pop();
    } else {
        return false
    }
}
return true
};

console.log(palindromes("A car, a man, a maraca."))
console.log(palindromes("r3ace3car"))
// Do not edit below this line
module.exports = palindromes;

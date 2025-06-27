const leapYears = function(year) {
    if (year%4 === 0) {
        return !(year % 100 === 0 && year % 400 !== 0);
    }

    return false;
};

console.log(leapYears(1996));
console.log(leapYears(2000));
// Do not edit below this line
module.exports = leapYears;

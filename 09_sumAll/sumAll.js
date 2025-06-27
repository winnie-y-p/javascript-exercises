const sumAll = function(a, b) {
    if (a < 0 || !Number.isInteger(a)) return "ERROR";
    if (b < 0 || !Number.isInteger(b)) return "ERROR";

    if ( a > b) {
        let c = b;
        b = a;
        a = c;
    }

    let result = 0;
     while (a < b + 1) {
         result += a;
         a++;
     }
     return result;

};

function sumAll2(a, b) {
    if (a < 0 || !Number.isInteger(a)) return "ERROR";
    if (b < 0 || !Number.isInteger(b)) return "ERROR";

    if ( a > b) {
        let c = b;
        b = a;
        a = c;
    }

    let arrayToSum = [];
    while (a < b + 1) {
    arrayToSum.push(a);
    a++;
    }

    return arrayToSum.reduce((total, item) => total + item, 0);
}

console.log(sumAll(2, 7));

// Do not edit below this line
module.exports = sumAll;

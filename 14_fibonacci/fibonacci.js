const fibonacci = function(num) {
    if (num === 0 || num === "0") {
        return 0;
    }

    if (num < 0) {
        return "OOPS";
    }
    const arr = [1,1];

for (let i = 2; i < num; i++){
    arr[i] = arr[i-1] + arr[i-2];
    arr.push(arr[i]);
}
return arr[num-1];
};

console.log(fibonacci(15))
// Do not edit below this line
module.exports = fibonacci;

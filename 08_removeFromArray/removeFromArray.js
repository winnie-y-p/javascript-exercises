const removeFromArray = function(values, ...itemsToRemove) {
    return values.filter(value => !itemsToRemove.includes(value))
};

// Do not edit below this line
module.exports = removeFromArray;

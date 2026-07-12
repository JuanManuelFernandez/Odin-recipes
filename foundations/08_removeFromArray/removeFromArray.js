const removeFromArray = function(arr, ...args) {
    return arr.filter(item => !args.includes(item));
};

removeFromArray(["hey", 2, 3, "ho"], "hey", 3)

// Do not edit below this line
module.exports = removeFromArray;

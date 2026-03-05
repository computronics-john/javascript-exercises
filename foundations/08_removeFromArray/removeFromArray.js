const removeFromArray = function(sampleArray, ...args) {
    return sampleArray.filter(val => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;

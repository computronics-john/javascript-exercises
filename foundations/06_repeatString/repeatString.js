const repeatString = function(selectedString, numberOfIterations) {
    let finalString = ""
    let currentIteration = 0
    while (currentIteration < numberOfIterations) {
        finalString += selectedString
        currentIteration++
    }
    if (numberOfIterations < 0) return "ERROR"
    else return finalString
};

// Do not edit below this line
module.exports = repeatString;

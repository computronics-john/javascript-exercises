const sumAll = function(minNumber, maxNumber) {
    let finalResult = 0;
    if (Number.isInteger(minNumber) === false || Number.isInteger(maxNumber) === false) return "ERROR";
    else if (minNumber < maxNumber) {
        if (minNumber < 0 || maxNumber < 0) return "ERROR";
        while (minNumber <= maxNumber) {
            finalResult += minNumber;
            minNumber++;
        }
    }
    else if (minNumber > maxNumber) {
        if (minNumber < 0 || maxNumber < 0) return "ERROR";
        while (minNumber >= maxNumber) {
            finalResult += minNumber;
            minNumber--;
        }
    }
    return finalResult;
};

// Do not edit below this line
module.exports = sumAll;

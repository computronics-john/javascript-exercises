const reverseString = function(selectedString) {
    let finalString = ""
    let numberOfCharacters = selectedString.length
    while (numberOfCharacters > 0) {
        finalString += selectedString.charAt(numberOfCharacters - 1)
        numberOfCharacters--    
    }

    return finalString
};

// Do not edit below this line
module.exports = reverseString;

const leapYears = function(sampleYear) {
    if (sampleYear % 4 === 0 && sampleYear % 100 !== 0) return true;
    else if (sampleYear % 400 === 0) return true;
    else return false;
};

// Do not edit below this line
module.exports = leapYears;

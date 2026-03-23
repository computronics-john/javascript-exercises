const fibonacci = function(fibonacciInput) {
    if (fibonacciInput < 0) return 'OOPS';
    else return Math.round(((1.618034 ** fibonacciInput) - ((-0.618034) ** fibonacciInput)) / Math.sqrt(5))
};

// Do not edit below this line
module.exports = fibonacci;

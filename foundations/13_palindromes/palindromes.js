const palindromes = function (word) {
    let newWord = word.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@ [\]^_`{|}~]/g,"").split('').reverse().join('');
    if (newWord === newWord.split('').reverse().join('')) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;

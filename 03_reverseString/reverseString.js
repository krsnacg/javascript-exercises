const reverseString = function(phrase) {
    if (phrase == '') return '';
    let reversedPhrase = "";
    for (let index = phrase.length-1; index >= 0; index--) {
        reversedPhrase += phrase.at(index);
    }
    return reversedPhrase;
};

// Do not edit below this line
module.exports = reverseString;

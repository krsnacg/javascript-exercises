const palindromes = function (word) {
    word = word.split(new RegExp("[^A-Za-z0-9]")).join("").toLowerCase();
    const length = word.length - 1;
    for (let index = 0; index < length + 1; index++) {
        if (word.at(index) !== word.at(length - index)) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

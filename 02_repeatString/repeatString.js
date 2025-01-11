const repeatString = function(phrase, n) {
    let repeatedString = "";
    if (n >= 0) 
        for (let index = 0; index < n; index++) 
            repeatedString += phrase;
    else 
        repeatedString = "ERROR"
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;

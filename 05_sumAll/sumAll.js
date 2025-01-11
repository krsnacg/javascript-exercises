const sumAll = function(a, b) {
    if (a < 0  || b < 0) return 'ERROR';
    if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR'
    

    let sum = 0;
    if (a > b) {
        const temp = a
        a = b
        b = temp
    }

    for (let index = a; index <= b; index++) {
        sum += index;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

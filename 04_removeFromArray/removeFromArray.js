const removeFromArray = function(array, ...element) {
    let x = [];
    for (let index = 0; index < array.length; index++) {
        if (!element.includes(array[index]))
            x.push(array[index]);
    }
    return x;
};

// Do not edit below this line
module.exports = removeFromArray;

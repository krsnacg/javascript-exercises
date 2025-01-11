const fibonacci = function(number) {
    number = parseInt(number);
    if (number < 0) return "OOPS";
    if (number == 0) return 0;

    let last = 1;
    let secondToLast = 0;
    let aux = 0;

    for (let index = 0; index < number - 1; index++) {
        aux = last
        last = last + secondToLast;
        secondToLast = aux;
    }

    return last;
};

// Do not edit below this line
module.exports = fibonacci;

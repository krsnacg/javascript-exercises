const findTheOldest = function(people) {
    return people
        .map((item) => (!item.yearOfDeath) ? Object.assign({...item, yearOfDeath: new Date().getFullYear()}) : item)
        .sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth))[0];
};

// Do not edit below this line
module.exports = findTheOldest;

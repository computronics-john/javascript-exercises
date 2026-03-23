const findTheOldest = function(array) {
    const date = new Date();
    let ageMap = array.map((person) => {
        if (Object.hasOwn(person, "yearOfDeath")) {
            return person.yearOfDeath - person.yearOfBirth
        }
        else {
            return date.getFullYear() - person.yearOfBirth
        }
    });
    let ageLocator = ageMap.indexOf(Math.max(...ageMap));
    return array[ageLocator];
};

// Do not edit below this line
module.exports = findTheOldest;

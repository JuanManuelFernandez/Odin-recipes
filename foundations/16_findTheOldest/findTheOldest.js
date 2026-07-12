const findTheOldest = function(arr) {
    //PRIMERA Y SEGUNDA PARTE
    const yearActual = new Date().getFullYear();

    const getAge = person => (person.yearOfDeath || yearActual) - person.yearOfBirth;

    return arr.reduce((oldest, person) => 
        getAge(person) > getAge(oldest) ? person : oldest
    );
};

// Do not edit below this line
module.exports = findTheOldest;

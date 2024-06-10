const findTheOldest = function(arr) {
    const oldest = arr.reduce((oldestPerson, currentPerson) => {
        let lifespan = 0;
        if (currentPerson.yearOfDeath){
            lifespan = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        } else {
            const currentDate = new Date();
            lifespan = currentDate.getFullYear() - currentPerson.yearOfBirth;
        }
        if (lifespan > oldestPerson.lifespan) {
            return {...currentPerson, lifespan};
          }
        return oldestPerson;
    }, {lifespan: 0});
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

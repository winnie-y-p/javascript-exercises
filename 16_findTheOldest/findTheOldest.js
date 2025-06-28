const findTheOldest = function (people) {
    for (let person of people) {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
    }

    people.map(person => {
        person.age = person.yearOfDeath - person.yearOfBirth;
    })

    people.sort(function (a, b) {
        return b.age - a.age
    });

    return people[0];

};


console.log(findTheOldest([
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]))


console.log(findTheOldest(
   [ {
        name: "Carly",
        yearOfBirth: 1066,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    }
]))

console.log(findTheOldest(
    [
        {
            name: "Carly",
            yearOfBirth: 1942,
            yearOfDeath: 1970,
        },
        {
            name: "Ray",
            yearOfBirth: 1962,
            yearOfDeath: 2011,
        },
        {
            name: "Jane",
            yearOfBirth: 1912,
            yearOfDeath: 1941,
        },
    ]
))
// Do not edit below this line
module.exports = findTheOldest;

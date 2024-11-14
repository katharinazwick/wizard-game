function calculateSequence() {
    let roundHere = calculatePoints().round + 1;
    //let roundHere = require('./code'); + 1;
    const persons = [];
    let newPersons = [];
    const numberOfPeople = 3;
    for (let i = 1; i <= numberOfPeople; i++) {
        persons.push("person" + i);
    }
    for (let i = 0; i <= 10; i++) {
        if (roundHere === 1 + i * numberOfPeople) {
            return persons
        } else {
            const x = roundHere - 1 - i * numberOfPeople;
            newPersons = persons.slice(x);
            const newPersonsEnd = persons.slice(0, x).join();
            newPersons.push(newPersonsEnd);
            if (x <= 3) {
                break;
            }
        }
    }
    return newPersons
}

console.log(calculateSequence());
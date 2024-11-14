let forecast = [];
let persons = 3;

for (let i = 0; i < persons; i++) {
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


    rl.question("Please enter your forecast: ", function (input) {
        // Konvertiere die Eingabe zu einer Zahl
        let forecastOnly = parseInt(input, 10);

        forecast.push(forecastOnly);
        rl.close(); //close Interface
    })
}
;

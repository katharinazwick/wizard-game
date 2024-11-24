import {getPeople, setTheData} from './state.js';

export function getTheData(event) {
    const people = getPeople();
    const input = event.target;
    const formGetTheData = new FormData(input.form);
    const theData = [];
    let a;

    for (let i = 1; i <= people; i++) {
        theData.push({
            name: "",
            forecast: [],
            reached: [],
            result: [],
            finalResult: []
        });

        theData[i - 1].name = (formGetTheData.get(`person${i}`));
        //let keys = Object.keys(theData[i]); //["name", "forecast"...]

        for (let p = 1; p <= 4; p++) {
            theData[i - 1].forecast.push(parseInt(formGetTheData.get(`forecast${i}${p}`) || 0)); //11 //[keys[1]]
            theData[i - 1].reached.push(parseInt(formGetTheData.get(`reached${i}${p}`) || 0)); //[keys[2]]
        }
        /*for (const [key, value] of theData.entries()) {
                     /*if (!value[1]) {
                         //continue;
        }
        let fieldNumber = 0;
        if (key.startsWith("forecast")) {
            fieldNumber = parseInt(key.split("forecast")[1]);
        } else if (key.startsWith("reached")) {
            fieldNumber = parseInt(key.split("reached")[1]);
        }
        // TODO: Hier müssen wir den zustand aktualisieren, sodass die neuen werte eingetragen werden*/

    }

    setTheData(theData);
    console.log(theData)
    return theData;
}

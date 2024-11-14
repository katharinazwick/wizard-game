export function data (event) {
    event.preventDefault(); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    const form = event.target;
    const formData = new FormData(form);
    const persons = formData.get("numberOfPeople");

    const forecast = new Array(persons) //Array generieren
    for (let i=0; i<persons;i++) {
        forecast[i] =[];
    }
    forecast[0].push(4); //random erstmal mit werten füttern
    forecast[1].push(5);

    const reached = new Array(persons) //Array generieren
    for (let i=0; i<persons;i++) {
        reached[i] =[];
    }
    reached[0].push(3);
    reached[1].push(5);
console.log({persons, forecast, reached});
   return {persons, forecast, reached};
}
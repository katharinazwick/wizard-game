export function numberOfPeople(event) {
    /*const input = event.target;
    const people = input.value;*/
    const input = event.target;
    const formNumberOfPeople = new FormData(input.form);
    const people = formNumberOfPeople.get("numberOfPeople");
    console.log(people);
    return people;
}
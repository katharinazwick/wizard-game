function getTheData() {
    const people = 2;
    const theData = [];

    for (let i = 1; i <= people; i++) {
        theData.push({
            name: "",
            forecast: [],
            reached: [],
            result: [],
            finalResult: []
        });

       // let keys = Object.keys(theData[i]); //["name", "forecast"...]

        theData[i-1].name= ("paul"); //11
        theData[i-1].name =("heinz") ;
        theData[i-1].forecast.push(i+3);
        theData[i-1].reached.push(i + 2);
        theData[i-1].reached.push(i + 3);
    }
    /*

    theData[i][keys[0]] = formGetTheData.get(`person${i}`);

    for (const [key, value] of theData.entries()) {
        /*if (!value[1]) {
            //continue;

}*/
    return theData;
}

console.log(getTheData());
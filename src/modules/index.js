import {data} from "./data.js";

const gamedataform = document.getElementsByClassName("gamedataform");
for(let element of gamedataform) {
    element.addEventListener("submit",data)
}




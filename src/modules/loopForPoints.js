//import {getPeople} from "./sharedState";

const people = 3//getPeople();
const round = 4;
const pointsForGameForm = document.getElementById("pointsForGameForm");

 for (let p =0; p<round;p++) {
     for (let i = 0; i < people; i++) {
         const forecastInput = document.createElement('input');
         forecastInput.type = 'text';
         forecastInput.name = `forecast${p}${i}`// {i<10? '0':''}${i}`;
         forecastInput.placeholder = `forecast${p}${i}`
         forecastInput.size = 7;

         const reachedInput = document.createElement('input');
         reachedInput.type = 'text';
         reachedInput.name = `reached${p}${i}`// {i<10? '0':''}${i}`;
         reachedInput.placeholder = `reached${p}${i}`
         reachedInput.size = 7;



         pointsForGameForm.appendChild(forecastInput);
         pointsForGameForm.appendChild(reachedInput);

     }
     //const lineBreak = document.createElement("br");
     const wrapper = document.createElement("div");
     wrapper.style.marginBottom = "20px";
     pointsForGameForm.appendChild(wrapper);
 }
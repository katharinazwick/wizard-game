import {getResult} from "./state.js";
import {calculateFinalResult} from "./calculateFinalResult.js";

export function outputEndGame (){
    calculateFinalResult();
    const result = getResult();
    for (let i = 0; i < result.length; i++){
       //for(let key in result[i]){
       //}
    }
}
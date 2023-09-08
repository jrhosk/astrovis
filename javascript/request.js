
import fetch from "node-fetch";

function encoder(directory){
    const textEncoder  = new TextEncoder();

    var encodedString = "";

    textEncoder.encode(DIR).forEach((element)=>{
        encodedString = encodedString.concat("", element.toString(16));
    });

    return encodedString;
}

const BASE_URL = "http://127.0.0.1:8000/tree/";
const DIR = "C:\\Users\\oniba\\Development\\Python\\aisubot";

const textEncoder  = new TextEncoder();

const encodedString = encoder(DIR);
console.log(encodedString);

const URL = BASE_URL.concat("", encodedString);

let response = await fetch(URL);
let data = await response.json();

console.log(data);


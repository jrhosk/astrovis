
import fetch from "node-fetch";

function encoder(directory){
    const textEncoder  = new TextEncoder();

    var encodedString = "";

    textEncoder.encode(directory).forEach((element)=>{
        encodedString = encodedString.concat("", element.toString(16));
    });

    return encodedString;
}

 async function getDirectoryMap(){
    const BASE_URL = "http://127.0.0.1:8000/tree/";
    const DIR = "/users/jhoskins/fornax/Development/astrovis/";

    const encodedString = encoder(DIR);
    console.log(encodedString);

    const URL = BASE_URL.concat("", encodedString);

    let response = await fetch(URL)
    .then(response => {
        return response.json()
    }).catch(error =>{
        console.log(error)
    });
    //let data = await response.json();

    //return data;
}

export default getDirectoryMap;

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
    const DIR = "/home/mystletainn/Development/nrao/astrovis/server";

    const encodedString = encoder(DIR);
    console.log(encodedString);

    const url = BASE_URL.concat("", encodedString);

    try {
        const response = await fetch(url);
         /*
        // Check if the response contains the "Access-Control-Allow-Origin" header
        const accessControl = response.headers.get('Access-Control-Allow-Origin');
    
        // Check if the CORS policy allows the request (e.g., '*' means any origin is allowed)
        if (accessControl === '*' || accessControl.startsWith('http://') || accessControl.startsWith('https://')) {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
         */
          // Parse the JSON data from the response
          const jsonData = await response.json();
    
          return jsonData;
        //} else {
        //  throw new Error('CORS policy does not allow this request');
       // }
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }    
}

export default getDirectoryMap;
import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

import getDirectoryMap from './request.js';

function printTree(){
  console.log("...getting directory");
  getDirectoryMap()
  .then(data => {
    // Use the JSON data here
    console.log(JSON.stringify(data[0], undefined, 4));
  })
  .catch(error => {
    // Handle errors here
    console.error('Failed to fetch JSON data:', error);
  });
}


function ButtonUsage() {
  return(<>
    {fetch("http://127.0.0.1:8000/")
    .then(response=>{
      return response.json();
    })
    .then(data => {
      //return <Button variant="contained" >{data.Hello}</Button>
      console.log(data.Hello)
    })
  }</>
  )
}


function HelloButton() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from an API
    fetch("http://127.0.0.1:8000/")
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Update the state with fetched data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* Render the fetched data */}
          <p>{data.Hello}</p>
        </div>
      )}
    </div>
  );
}

export default HelloButton;

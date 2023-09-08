import * as React from 'react';
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

export default function ButtonUsage() {
  return <Button variant="contained" onClick={printTree} >Hello world</Button>;
}
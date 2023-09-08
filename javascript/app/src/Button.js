import * as React from 'react';
import Button from '@mui/material/Button';

import getDirectoryMap from './request.js';

function printTree(){
  console.log("...getting directory");
  console.log(getDirectoryMap());
}

export default function ButtonUsage() {
  return <Button variant="contained" onClick={printTree} >Hello world</Button>;
}
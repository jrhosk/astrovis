import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

//import {getDirectoryMap} from "./request.js"

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

    const URL = BASE_URL.concat("", encodedString);

    let response = await fetch(URL);
    let data = await response.json();

    console.log(data);

    return data;
}

export default function DirectoryTreeView() {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  getDirectoryMap();
  
  const data = {
    id: 'root',
    name: 'Parent',
    children: [
      {
        id: '1',
        name: 'Child - 1',
      },
      {
        id: '3',
        name: 'Child - 3',
        children: [
          {
            id: '4',
            name: 'Child - 4',
          },
        ],
      },
    ],
  };

  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {renderTree(data)}
    </TreeView>
  );
}
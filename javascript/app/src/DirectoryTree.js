import { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

//import encoder from './request.js';

import './App.css';

//const BASE_URL = "http://127.0.0.1:8000/tree/";
//const DIR = "/users/jhoskins/fornax/Development/astrovis/";

//const encodedString = encoder(DIR);
//const url = BASE_URL.concat("", encodedString);

export default function DirectoryTreeView() {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );
    
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    console.log();
    // Fetch data from an API
    fetch("http://127.0.0.1:8000/base/")
       .then(response=>{
        response.json()
        .then(data=>{
          setData(data); // Update the state with fetched data
          setLoading(false); // Set loading to false
          console.log(JSON.stringify(data, undefined, 2));
        })
       }).catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); 

  

  return (
    <div className='sidebar'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <TreeView
            aria-label="rich object"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpanded={['root']}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 810, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            >
            {renderTree(data)}
          </TreeView>  
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { getMap } from '../../utlis';
import Responses from './Responses';


function MultRes() {

  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState(true);
 
  // getMap().then(res => setRes(res));
 
  useEffect(() => {
    const image2 = `fakepath//${res.image}`;
    getMap().then(res => setRes(res)).then(setLoading(false));
    if(res.image === image2) {
      res.image = `fakepath//${res.image}`;
      return  res;
    
    } else return res;
      
   
    
  }, []);

  if(loading) return <div>Loading...</div>;
  return <div>
    <Responses res={res} />
  </div>;
  
}

export default MultRes;


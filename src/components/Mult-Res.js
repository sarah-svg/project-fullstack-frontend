
import React, { useState, useEffect } from 'react';
import { getMap } from '../utlis';
import Responses from './Responses';


function MultRes() {

  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    getMap().then(res => setRes(res));
    setLoading(false);
  }, []);
  console.log(res, 'res');
  if(loading) return <div>Loading...</div>;
  return <div><Responses res={res} /></div>;
  
}

// MultRes.propTypes = {
//   response: PropTypes.any.isRequired,
// };

export default MultRes;


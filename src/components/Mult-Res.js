/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { getMap } from '../utlis';
import ResOne from './Res-One';

function MultRes() {

  const [res, setRes] = useState([]);
    
  useEffect(() => {
    getMap().then(response => setRes(response));
  }, []);
    
  const resElem = res.map((item) => {
    console.log(item, 'heyyyyy');
    // eslint-disable-next-line react/jsx-key
    // return ;
    <li>
      <div>{...item}</div>
    </li>;
  });


  return (
    <ul>
      { resElem}
    </ul>
  );
}

// MultRes.propTypes = {
//   response: PropTypes.any.isRequired,
// };

export default MultRes;


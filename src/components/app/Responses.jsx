import React from 'react';
import PropTypes from 'prop-types';
import ResOne from './Res-One';


function Responses({ res }) {
  const resElements = res.map((item) => {
    return (
      // eslint-disable-next-line max-len
      <div key={res.image + res.id + res.locations * Math.random(res.id + 1)   }>
        <ResOne {...item}/>
            
      </div>
    );
 
  });
  return (
    <ul>
      { resElements}
    </ul>
  );
}

Responses.propTypes = {
  res: PropTypes.any,
};

export default Responses;


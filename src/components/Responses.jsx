import React from 'react';
import PropTypes from 'prop-types';
import ResOne from './app/Res-One';

function Responses({ res }) {
  const resElements = res.map((item) => {
    return (
      <div key={res.image + res.locations}>
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


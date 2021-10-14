import React from 'react';
// import PropTypes from 'prop-types';

function ResOne({ image, locations }) {
  return (
    <div>
      <figure>
        <img src={image}></img>
        <figcaption>{locations }</figcaption>
      </figure>
    </div>
  );
}

// ResOne.propTypes = {

// };

export default ResOne;




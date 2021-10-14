/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function ResOne({ image, locations, id }) {
  console.log(image, locations);
  return (
    <div>
      <figure>
        <span> Map id: {id}</span>
        <img src={image}></img>
        <figcaption>Map burn pile size{locations}</figcaption>
  
      </figure>
    </div>
  );
}

ResOne.propTypes = {
  image: PropTypes.string,
  locations: PropTypes.array,
  id: PropTypes.string
};

export default ResOne;




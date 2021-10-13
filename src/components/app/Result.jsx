/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
// eslint-disable-next-line no-unused-vars
// import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

function Result({ response }) {
  return (
    <div>
      <ReactJson src={response} />
       
      <div>{response.image}</div>
      <div>{response.locations }</div>
    </div>
  );
}


// Result.propTypes = {
//   response: PropTypes.oneOfType([
//     PropTypes.arrayOf,
//     PropTypes.object
//   ])
// };

export default Result;


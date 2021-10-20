
import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

function Result({ response }) {
  return (
    <div>
      <ReactJson src={response} />
       
   
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


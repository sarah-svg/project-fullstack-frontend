
import React from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

// eslint-disable-next-line react/prop-types
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



import React from 'react';
import PropTypes from 'prop-types';
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
// function Result({ response }) {
//   console.log(response.image);
 

//   return (
//     <div>
//     hello
//     </div>
//   );
// }
  


Result.propTypes = {
  response: PropTypes.oneOfType([
    PropTypes.arrayOf,
    PropTypes.object
  ])
};

export default Result;


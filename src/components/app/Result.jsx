
import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

function Result({ response }) {
  console.log(response[0], 'from result page');
  return (
    <div>
      <ReactJson src={response} />
       
   
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


import React from 'react';
import PropTypes from 'prop-types';
import ResOne from './Res-One';

function MultRes({ response }) {
  const resElem = response.map(item => {
    <ResOne image={item.image} locations={item.locations}/>;
  });


  return (
    <div>
      { resElem}
    </div>
  );
}

MultRes.propTypes = {
  response: PropTypes.any.isRequired,
};

export default MultRes;


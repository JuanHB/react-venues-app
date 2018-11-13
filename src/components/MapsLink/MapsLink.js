import React from 'react';
import PropTypes from 'prop-types';
import { createMapsUrl } from 'src/utils/createMapsUrl'

const MapsLink = ({ address }) => {

  return (
    <a
      target='_blank'
      className='card-link'
      rel='noopener noreferrer'
      href={createMapsUrl(address)}>
      How to get there
    </a>
  );

};

MapsLink.propTypes = {
  address: PropTypes.string.isRequired
};

export default MapsLink;
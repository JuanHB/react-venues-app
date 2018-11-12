import React from 'react';
import PropTypes from 'prop-types';
import { createMapsUrl } from 'src/utils/createMapsUrl'

const VenueCard = ({ item }) => {

  const { venue } = item;
  const address = venue.location.formattedAddress.join(', ');
  const categories = venue.categories.map(c => c.shortName).join(', ');

  const _renderMapsLink = address => {
    return (
      <a
        target='_blank'
        className='card-link'
        rel='noopener noreferrer'
        href={createMapsUrl(address)}>
        How to get there
      </a>
    )
  };

  return (
    <div className='card' style={stylesVenueCard.card}>
      <div className='card-body'>
        <h5 className='card-title'>{venue.name}</h5>
        <h6 className='card-subtitle mb-2 text-muted'> {categories} </h6>
        <p className='card-text'>
          {address}
        </p>
        {_renderMapsLink(address)}
      </div>
    </div>
  );

};

VenueCard.propTypes = {
  item: PropTypes.object.isRequired
};

const stylesVenueCard = {
  card: {
    marginBottom: '1em',
  }
};

export default VenueCard;
import React from 'react';
import PropTypes from 'prop-types';
import MapsLink from 'src/components/MapsLink/MapsLink';

const VenueCard = ({ item }) => {

  const { venue } = item;
  const address = venue.location.formattedAddress.join(', ');
  const categories = venue.categories.map(c => c.shortName).join(', ');

  return (
    <div className='card' style={stylesVenueCard.card}>
      <div className='card-body'>
        <h5 className='card-title'>{venue.name}</h5>
        <h6 className='card-subtitle mb-2 text-muted'> {categories} </h6>
        <p className='card-text'>
          {address}
        </p>
        <MapsLink address={address}/>
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
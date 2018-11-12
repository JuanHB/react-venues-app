import React from 'react';
import { connect } from 'react-redux';
import VenueCard from './VenueCard';

const VenuesList = props => {

  const { list, fetching, geoFailed } = props.venues;

  const _renderCardMessage = message => (
    <div className='card'>
      <div className='card-body'>{message}</div>
    </div>
  );

  if (fetching) {
    return _renderCardMessage('Loading...');
  }

  if (geoFailed) {
    return _renderCardMessage('The location wasn\'t found, please check and try again.');
  }

  return (
    <div>
      {
        list.map((item, index) =>
          <VenueCard item={item} key={index}/>
        )
      }
    </div>
  );

};

const mapStateToProps = state => ({
  venues: state.venues
});

export default connect(mapStateToProps)(VenuesList);

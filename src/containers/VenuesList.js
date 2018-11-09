import React from 'react';
import {connect} from 'react-redux';

const VenuesList = props => {

  const {list, fetching, geoFailed} = props.venues;

  if(fetching) {
    return <div>Loading...</div>;
  }

  if(geoFailed) {
    return <div>The location wasn't found, please check and try again.</div>;
  }

  return list.map(item => {
    return <div key={ item.referralId }> { item.venue.name } </div>;
  });

};

const mapStateToProps = state => ({
  venues: state.venues
});

export default connect(mapStateToProps)(VenuesList);

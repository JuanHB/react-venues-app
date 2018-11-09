import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'src/actions/Actions';
import fetchVenues from 'src/services/VenuesService';

const withVenues = BaseComponent => {

  class ComponentWithVenues extends Component {

    componentDidMount() {

      this.props.requestVenues();
      fetchVenues()
        .then(({groups}) => {
          if(groups && groups.length){
            this.props.receiveVenues(groups[0].items)
          }
        })

    }

    render() {

      const { requestVenues, receiveVenues, ...rest } = this.props;

      console.log(rest)

      return ( !rest.venues.fetching ? <BaseComponent {...rest} /> : <div>Loading...</div> );
    }
  }

  return connect(mapStateToProps, actions)(ComponentWithVenues);
};

const mapStateToProps = state => ({
  venues: state.venues
});

export default withVenues;
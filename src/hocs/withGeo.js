import React from 'react';

const withGeo = (BaseComponent) => {
  class EnhancedComponent extends React.Component {

    state = { geo: null };

    componentDidMount() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          const {latitude, longitude} = position.coords;
          this.setState({geo: `${latitude}, ${longitude}`});
        });
      }
    }

    render() {
      return <BaseComponent geo={this.state.geo} {...this.props} />;
    }
  }

  return EnhancedComponent;
};

export default withGeo;
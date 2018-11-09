import React, {Component} from 'react';

const withLoader = (BaseComponent, callOnMount) => {

  class EnhancedComponent extends Component {

    state = {
      data: null,
    };

    componentDidMount() {
      callOnMount()
        .then(data => this.setState({data}));
    }

    render() {
      if (!this.state.data) {
        return <div>Loading, please wait...</div>;
      }

      return <BaseComponent data={this.state.data} {...this.props} />;
    }
  }

  return EnhancedComponent;
};

export default withLoader;
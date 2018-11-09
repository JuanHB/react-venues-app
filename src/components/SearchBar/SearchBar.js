import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchVenues} from 'src/actions/Actions';

class SearchBar extends Component {

  state = {
    near: null
  };

  handleChange(event) {
    this.setState({near: event.target.value});
  }

  render() {
    return (
      <form onSubmit={e => this._handleSubmit(e)}>
        <div className="form-group row">
          <div className="col-xl">
            <input type="text"
                   style={formStyle.inputField}
                   className="form-control"
                   placeholder="Type a location name to search, ex: Tokyo, Chicago, New York..."
                   onChange={e => this.handleChange(e)}/>
          </div>
          <div className="col-xs-3">
            <button className="btn btn-primary" type="submit">Search</button>
          </div>
        </div>
      </form>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(fetchVenues({
      near: this.state.near
    }));
  }
}

const formStyle = {
  inputField: {marginRight: 8}
};

export default connect()(SearchBar);
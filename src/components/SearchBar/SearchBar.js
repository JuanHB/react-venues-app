import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVenues } from 'src/actions/Actions';

class SearchBar extends Component {

  // local state to make a controlled input
  state = {
    near: null
  };

  // input ref to access the DOM element
  inputRef = React.createRef();

  componentDidMount() {
    // for usability purposes, focus the search input
    // after loading the component
    this.inputRef.current.focus();
  }

  render() {
    const { near } = this.state;
    return (
      <form onSubmit={e => this._handleSubmit(e)} style={formStyle.form}>
        <div className='row'>
          <div className='col'>
            <input type='text'
                   ref={this.inputRef}
                   style={formStyle.inputField}
                   className='form-control'
                   placeholder='Tokyo, Chicago, New York...'
                   onChange={e => this._handleChange(e)}/>
          </div>
          <div className='col'>
            <button disabled={!near} type='submit' className='btn btn-primary'>
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();
    const { near } = this.state;
    if (near) {
      this.props.dispatch(fetchVenues({ near }));
    }
  }

  _handleChange(event) {
    this.setState({ near: event.target.value });
  }
}

const formStyle = {
  form: { marginTop: '1em', marginBottom: '1em' },
  inputField: { marginRight: '1em' }
};

export default connect()(SearchBar);
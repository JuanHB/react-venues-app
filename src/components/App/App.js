import React, { Component } from 'react';

import thunk from 'redux-thunk';
import reducers from 'src/reducers/combine';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import Header from 'src/components/Header/Header';
import SearchBar from 'src/components/SearchBar/SearchBar';
import VenuesList from 'src/components/Venues/VenuesList';
import { fetchVenues, clearVenues } from 'src/actions/Actions';

import 'node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {

  componentDidMount() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;
          store.dispatch(fetchVenues({ ll: `${latitude}, ${longitude}` }));
        }, () =>
          store.dispatch(clearVenues())
      );
    } else {
      store.dispatch(clearVenues());
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <div className="row" style={stylesApp}>
            <div className="col-md">
              <Header/>
              <SearchBar/>
              <VenuesList/>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

const stylesApp = {
  marginTop: 40
};

export default App;

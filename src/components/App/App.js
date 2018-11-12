import React, {Component} from 'react';

import SearchBar from 'src/components/SearchBar/SearchBar';
import Header from 'src/components/Header/Header';

import VenuesList from 'src/components/Venues/VenuesList';
import 'node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={stylesApp}>
          <div className="col-md">
            <Header/>
            <SearchBar/>
            <VenuesList/>
          </div>
        </div>
      </div>
    );
  }
}

const stylesApp = {
  marginTop: 40
};

export default App;

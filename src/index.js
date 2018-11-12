import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import App from './components/App/App';
import reducers from 'src/reducers/combine';
import { fetchVenues, clearVenues } from './actions/Actions';

const store = createStore(reducers, applyMiddleware(thunk));

// This is ugly... Calling actions inside the main index.js...
// But, since I have a limited time to make decisions, the initial call was made here.
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

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// @flow

// import redux library
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// make store
import reducers from './reducers';

// require('./stateTest')(store); // eslint-disable-line

// import react library
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './layouts/App';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStore(
    reducers,
    preloadedState,
    applyMiddleware(thunk),
);

const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

render(<Root />, document.getElementById('app'));

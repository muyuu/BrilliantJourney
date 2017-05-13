// @flow

// import redux library
import { createStore } from 'redux';

// make store
import reducers from './reducers';
let store = createStore(reducers);

require('./stateTest')(store); // eslint-disable-line

// import react library
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './layouts/App';

const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

render(<Root />, document.getElementById('app'));

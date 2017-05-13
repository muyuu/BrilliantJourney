// @flow
import React from 'react';
import {render} from 'react-dom';

// import {Provider} from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
let store = createStore(reducers);
console.log(store.getState()); // eslint-disable-line

import {startPlace, startDatetime} from './actions/start';


// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
    console.log(store.getState()) // eslint-disable-line
);

store.dispatch(startPlace('Tokyo'));
store.dispatch(startDatetime(parseInt(new Date() / 1000)));

// Stop listening to state updates
unsubscribe();

// const Root = () => (
//     <Provider store={store}>
//         <App/>
//     </Provider>
// );
//
// render(<Root />, document.getElementById('app'));

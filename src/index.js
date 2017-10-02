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
import App from './containers/layouts/App';
import styles from './index.css';

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

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

const Root = () => (
    <Provider store={store}>
        <App className={styles.app} />
    </Provider>
);

render(<Root />, document.getElementById('app'));

window.addEventListener('load',()=>{
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCCqO_cGMqZWCpCvNX4GndvkBFgmYHGA-M&callback=initGmaps';
    document.body.appendChild(script);
});

window.initGmaps = ()=>{
    const uluru = {lat: -25.363, lng: 131.044};
    window.mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru
    });
    window.markerInstance = new window.google.maps.Marker({
        position: uluru,
        map: window.mapInstance
    });
};

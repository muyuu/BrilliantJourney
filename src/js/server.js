import path from 'path';
import Express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './reducers';
import App from './layouts/App';

const app = Express();
const port = 3000;

const apiV1Place = require('./api/v1/place');
app.use('/api/place', apiV1Place);

//Serve static files
app.use(Express.static('dist'));

// This is fired every time the server side receives a request
app.use('/', handleRender);

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
    console.log('access /');
    // Create a new Redux store instance
    const store = createStore(counterApp);

    // Render the component to a string
    const html = ReactDOMServer.renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>brilliant journey</title>
                <meta name="apple-mobile-web-app-capable" content="yes">
                <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
            </head>
            <body>
                <div id="app">${html}</div>
                <script>
                  // WARNING: See the following for security issues around embedding JSON in HTML:
                  // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                  window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
                <script src="/assets/js/index.js"></script>
            </body>
        </html>
        `;
}

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${server.address().port}!`);
});


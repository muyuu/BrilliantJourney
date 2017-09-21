const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk');
const { Provider } = require('react-redux');
const reducers = require('../reducers');
const App = require('../layouts/App');


// We are going to fill these out in the sections to follow
const handleRender = (req, res) => {
    console.log('access /');
    // Create a new Redux store instance
    const store = createStore(
        reducers,
        applyMiddleware(thunk),
    );

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
};

const renderFullPage = (html, preloadedState) => {
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
};

module.exports = {
    handleRender,
};

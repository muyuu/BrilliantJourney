import Express from 'express';
import {handleRender} from './ssr/ssr';

const app = Express();
const port = 9000;

const apiV1Place = require('./api/v1/place');
app.use('/api/place', apiV1Place);

//Serve static files
app.use(Express.static('dist'));

// This is fired every time the server side receives a request
app.use('/', handleRender);

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${server.address().port}!`);
});


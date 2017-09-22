const Express = require('express');

const app = Express();
const port = 9000;

const apiV1Place = require('./api/v1/place');
const apiV1Directions = require('./api/v1/directions');
app.use('/api/place', apiV1Place);
app.use('/api/directions', apiV1Directions);

//Serve static files
app.use(Express.static('dist'));

// This is fired every time the server side receives a request
app.use('/', (req, res)=>{
    res.send('test');
});

const server = app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${server.address().port}!`);
});


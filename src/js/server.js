import Express from 'express';
import {handleRender} from './ssr/ssr';

const app = Express();
const port = 3000;


//Serve static files
app.use(Express.static('dist'));

// This is fired every time the server side receives a request
app.get('/api/place', handleApiPlace);
app.use('/', handleRender);

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${server.address().port}!`);
});

import googleapi from './conf/googleapis';
const googleMapsClient = require('googleplaces')(googleapi.key, googleapi.format);

function handleApiPlace(req, res){
    console.log('access /api/place');
    let query = {
        input: req.query.q,
        language: 'ja',
        type: 'geocode'
    };

    googleMapsClient.placeAutocomplete(query, (err, response)=>{
        if (!err) {
            res.contentType("application/json");
            res.end(JSON.stringify(response));
        } else {
            res.json(err);
        }
    });
}


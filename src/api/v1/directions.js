const express = require('express');
const fetch = require('isomorphic-fetch');
const router = express.Router();

const googleapi = require('../../config/googleapis');

console.log(googleapi.directions);

router.get('/', handleDirections);


function handleDirections(req, res){
    console.log('access /api/directions');

    let query = {
        origin: req.query.origin,
        destination: req.query.origin,
        waypoints: req.query.waypoints,
        language: 'ja',
    };
    const param = Object.keys(query).map(keyName => `${keyName}=${query[keyName]}`).join('&');

    const requestUrl = googleapi.directions + `&${param}`;
    console.log(requestUrl);
    fetch(requestUrl)
        .then(response => response.json())
        .then((data)=>{
            console.log('response data is ....');
            console.log(data);
            res.contentType("application/json");
            res.end(JSON.stringify(data));
        });

}

module.exports = router;

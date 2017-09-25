const express = require('express');
const fetch = require('isomorphic-fetch');
const googleapi = require('../../config/googleapis');
const router = express.Router();

router.get('/', handleDirections);

function handleDirections(req, res){
    let query = {
        origin: req.query.origin,
        destination: req.query.origin,
        waypoints: req.query.waypoints,
        language: 'ja',
    };
    const param = Object.keys(query).map(keyName => `${keyName}=${query[keyName]}`).join('&');

    const requestUrl = googleapi.directions + `&${param}`;
    fetch(requestUrl)
        .then(response => response.json())
        .then((data)=>{
            res.contentType("application/json");
            res.end(JSON.stringify(data));
        });

}

module.exports = router;

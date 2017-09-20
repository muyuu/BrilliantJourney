const express = require('express');
const router = express.Router();

const googleapi = require('../../config/googleapis');
console.log(googleapi.key);
console.log(googleapi.format);
const googleMapsClient = require('googleplaces')(googleapi.key, googleapi.format);


router.get('/', handleApiPlace);


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

module.exports = router;

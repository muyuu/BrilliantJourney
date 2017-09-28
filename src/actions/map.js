// @flow
import {
    REQUEST_MAP,
    RECEIVE_MAP,
} from "./actionTypes";

const requestMap = (requestObj) =>{
    return {
        type: REQUEST_MAP,
        requestObj,
        fetched: false,
    };
};

const receiveMap = (ltlng) => {
    return {
        type: RECEIVE_MAP,
        ltlng,
        fetched: true,
    };
};

export const applyMap = ({description, place_id}: {description: string; place_id: ?string;}) => {
    return function(dispatch){
        const prm = {};

        if ( place_id === null ) {
            prm.address = description;
        } else {
            prm.placeId = place_id;
        }

        dispatch(requestMap(prm));

        requestGeoCode(prm).then((ltlng)=>{
            dispatch(receiveMap(ltlng));
        });
    };
};

function requestGeoCode (prm) {
    const geocoder = new window.google.maps.Geocoder();
    return new Promise((resolve, reject) => {
        geocoder.geocode( prm, (results, status) => {
            if (status == 'OK') {
                resolve(results[0].geometry.location);
            } else {
                reject('Geocode was not successful for the following reason: ' + status);
            }
        });
    });
}

// @flow
import {
    REQUEST_MAP,
    RECEIVE_MAP,
} from "./actionTypes";

const requestMap = (id, requestObj) =>{
    return {
        type: REQUEST_MAP,
        id,
        requestObj,
        fetched: false,
    };
};

const receiveMap = (id, result) => {
    return {
        type: RECEIVE_MAP,
        id,
        ltlng: result.geometry.location,
        placeId: result.place_id,
        fetched: true,
    };
};

export const applyMap = (id, {description, place_id}: {description: string; place_id: ?string;}) => {
    return function(dispatch){
        const prm = {};

        if ( place_id === null ) {
            prm.address = description;
        } else {
            prm.placeId = place_id;
        }

        dispatch(requestMap(id, prm));

        requestGeoCode(prm).then((result)=>{
            dispatch(receiveMap(id, result));
        });
    };
};

function requestGeoCode (prm) {
    const geocoder = new window.google.maps.Geocoder();
    return new Promise((resolve, reject) => {
        geocoder.geocode( prm, (results, status) => {
            if (status == 'OK') {
                resolve(results[0]);
            } else {
                reject('Geocode was not successful for the following reason: ' + status);
            }
        });
    });
}

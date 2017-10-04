// @flow
import {
    REQUEST_MAP,
    RECEIVE_MAP,
} from "./actionTypes";

const requestMap = (id: string, requestObj: RequestObj): RequestMapAction =>{
    return {
        type: REQUEST_MAP,
        id,
        requestObj,
        fetched: false,
    };
};

const receiveMap = (id: string, result: any): ReceiveMapAction => {
    return {
        type: RECEIVE_MAP,
        id,
        ltlng: result.geometry.location,
        placeId: result.place_id,
        fetched: true,
    };
};

export function applyMap(id: string, {description, place_id}: PlaceElement): ThunkAction {
    return (dispatch, getState) => {
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
}

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

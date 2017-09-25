import fetch from 'isomorphic-fetch';
import {REQUEST_DIRECTION, RECEIVE_DIRECTION,} from "./actionTypes";

const requestDirection = (url) =>{
    return {
        type: REQUEST_DIRECTION,
        url,
    };
};

const receiveDirection = (json) =>{
    return {
        type: RECEIVE_DIRECTION,
        json,
    };
};

export const fetchDirection = (start, points) =>{
    return function(dispatch){
        let url = `/api/directions`;

        const hasPlaceId = point => point.placeId || point.placeId !== null;
        const startPrefix = hasPlaceId(start) ? 'place_id:' : '';

        let param = `?origin=${startPrefix}${start.placeId}&destination=${startPrefix}${start.placeId}`;

        const waypoints = points.map( val => {
            const pointPrefix = hasPlaceId(val) ? 'place_id:' : '';
            return `${pointPrefix}${val.placeId}`;
        }).join('|');
        param += `&waypoints=${waypoints}`;

        url = url + param;

        dispatch(requestDirection(url));

        return fetch(url)
            .then(response => response.json())
            .then(json =>{
                dispatch(receiveDirection(json));
            })
            .catch((err)=>{
                console.log(err);
            });
    };
};


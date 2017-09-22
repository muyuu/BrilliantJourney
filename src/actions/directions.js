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

        let param = `?origin=place_id:${start.placeId}&destination=place_id:${start.placeId}`;

        const waypoints = points.map( val => `place_id:${val.placeId}` ).join('|');
        param += `&waypoints=${waypoints}`;

        url = url + param;

        dispatch(requestDirection(url));
        console.log(url);

        return fetch(url)
            .then(response => response.json())
            .then(json =>{
                console.log(json);
                dispatch(receiveDirection(json));
            })
            .catch((err)=>{
                console.log(err);
            });
    };
};


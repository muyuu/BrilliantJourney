import fetch from 'isomorphic-fetch';
import {
    REQUEST_DIRECTION,
    RECEIVE_DIRECTION,
    REQUEST_DIRECTION_FOR_MAP,
    RECEIVE_DIRECTION_FOR_MAP,
} from "./actionTypes";

const hasPlaceId = point => point.placeId || point.placeId !== null;

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

        const startPrefix = hasPlaceId(start) ? 'place_id:' : '';
        const startPlace = hasPlaceId(start) ? start.placeId : start.name;
        const startStr = startPrefix + startPlace;

        let param = `?origin=${startStr}&destination=${startStr}`;

        const waypoints = points.map( point => {
            const pointPrefix = hasPlaceId(point) ? 'place_id:' : '';
            const pointPlace = hasPlaceId(point) ? point.placeId : point.name;
            return `${pointPrefix + pointPlace}`;
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

const requestDirectionForMap = (requestMapParam) =>{
    return {
        type: REQUEST_DIRECTION_FOR_MAP,
        requestMapParam,
    };
};

const receiveDirectionForMap = (directionResult) =>{
    return {
        type: RECEIVE_DIRECTION_FOR_MAP,
        directionResult,
    };
};


export const fetchDirectionForMap = (start, points) =>{
    return function(dispatch){
        const d = new window.google.maps.DirectionsService();

        const origin = start.name;
        const destination = start.name;
        const waypoints = points.map( point => {
            return {
                location: point.name,
            };
        });

        const request = {
            origin,
            destination,
            waypoints,
            // optimizeWaypoints: true,
            travelMode: window.google.maps.DirectionsTravelMode.DRIVING,
        };

        dispatch(requestDirectionForMap(request));
        
        return d.route(request, (result, status)=>{
            // OKの場合ルート描画
            if (status == window.google.maps.DirectionsStatus.OK) {
                // r.setDirections(result);
                dispatch(receiveDirectionForMap(result));
            } else {
                console.log(result);
            }
        });
    };
};


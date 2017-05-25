import shortId from 'shortid';
import {
    ADD_POINT_INPUT,
    SET_POINT_PLACE,
    SET_POINT_ARRIVAL_TIME,
    SET_POINT_DEPARTURE_TIME,
    SET_POINT_DURATION,
} from "./actionTypes";

export const addPoint = () =>{
    return {
        type: ADD_POINT_INPUT,
        id: shortId(),
    };
};

export const pointPlace = (id, placeObject) => {
    return {
        type: SET_POINT_PLACE,
        id,
        name: placeObject.description,
        placeId: placeObject.place_id,
    };
};

export const pointDepartureTime = (id, departureTime) => {
    departureTime = new Date(departureTime).getTime();
    return {
        type: SET_POINT_DEPARTURE_TIME,
        id,
        departureTime,
    };
};

export const pointArrivalTime = (id, arrivalTime) => {
    arrivalTime = new Date(arrivalTime).getTime();
    return {
        type: SET_POINT_ARRIVAL_TIME,
        id,
        arrivalTime,
    };
};

export const pointDuration = (id, duration) => {
    duration = parseInt(duration, 10);
    return {
        type: SET_POINT_DURATION,
        id,
        duration,
    };
};



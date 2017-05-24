// @flow
import shortId from 'shortid';
import {
    ADD_POINT_INPUT,
    SET_POINT_PLACE,
    SET_POINT_ARRIVED_AT,
    SET_POINT_DEPARTURE_TIME,
    SET_POINT_DURATION,
} from "./actionTypes";

type PointPlace = {
    type: string,
    place: string
};
type PointArrivedAt = {
    type: string,
    arrivedAt: number
};
type PointDuration = {
    type: string,
    duration: number
};

export const addPoint = () =>{
    return {
        type: ADD_POINT_INPUT,
        id: shortId(),
    };
};

export const pointPlace = (id: string, place: string ): PointPlace => {
    return {
        type: SET_POINT_PLACE,
        id,
        place,
    };
};

export const pointDepartureTime = (id: string, departureTime: string ) => {
    departureTime = new Date(departureTime).getTime();
    return {
        type: SET_POINT_DEPARTURE_TIME,
        id,
        departureTime,
    };
};

export const pointArrivedAt = (id: string, arrivedAt: string ): PointArrivedAt => {
    arrivedAt = new Date(arrivedAt).getTime();
    return {
        type: SET_POINT_ARRIVED_AT,
        id,
        arrivedAt,
    };
};

export const pointDuration = (id: string, duration: string ): PointDuration => {
    duration = parseInt(duration, 10);
    return {
        type: SET_POINT_DURATION,
        id,
        duration,
    };
};



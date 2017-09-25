// @flow
import shortId from 'shortid';
import {
    ADD_POINT_INPUT,
    SET_POINT_PLACE,
    SET_POINT_ARRIVAL_TIME,
    SET_POINT_DEPARTURE_TIME,
    SET_POINT_DURATION,
} from "./actionTypes";
import type {PlaceElement} from '../types/suggested';
import type {
    PointAction,
    Id,
    DepartureTime,
    ArrivalTime,
    Duration
} from '../types/points';

export const addPoint = (): PointAction =>{
    return {
        type: ADD_POINT_INPUT,
        id: shortId(),
    };
};

export const pointPlace = (id: Id, placeElement: PlaceElement): PointAction => {
    return {
        type: SET_POINT_PLACE,
        id,
        name: placeElement.description,
        placeId: placeElement.place_id,
    };
};

export const pointDepartureTime = (id: Id, departureTime: DepartureTime): PointAction => {
    departureTime = new Date(departureTime).getTime();
    return {
        type: SET_POINT_DEPARTURE_TIME,
        id,
        departureTime,
    };
};

export const pointArrivalTime = (id: Id, arrivalTime: ArrivalTime): PointAction => {
    arrivalTime = new Date(arrivalTime).getTime();
    return {
        type: SET_POINT_ARRIVAL_TIME,
        id,
        arrivalTime,
    };
};

export const pointDuration = (id: Id, duration: Duration): PointAction => {
    duration = parseInt(duration, 10);
    return {
        type: SET_POINT_DURATION,
        id,
        duration,
    };
};



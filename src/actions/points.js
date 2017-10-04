// @flow
import shortId from 'shortid';
import {
    ADD_POINT_INPUT,
    SET_POINT_PLACE,
    SET_POINT_ARRIVAL_TIME,
    SET_POINT_DEPARTURE_TIME,
    SET_POINT_DURATION,
} from "./actionTypes";

export const addPoint = (): AddPointInputAction =>{
    return {
        type: ADD_POINT_INPUT,
        id: shortId(),
    };
};

export const pointPlace = (id: Id, placeElement: PlaceElement): SetPointPlaceAction => {
    return {
        type: SET_POINT_PLACE,
        id,
        name: placeElement.description,
        placeId: placeElement.place_id,
    };
};

export const pointDepartureTime = (id: Id, departureTime: DepartureTime): SetPointDepartureTimeAction => {
    departureTime = new Date(departureTime).getTime();
    return {
        type: SET_POINT_DEPARTURE_TIME,
        id,
        departureTime,
    };
};

export const pointArrivalTime = (id: Id, arrivalTime: ArrivalTime): SetPointArrivalTimeAction => {
    arrivalTime = new Date(arrivalTime).getTime();
    return {
        type: SET_POINT_ARRIVAL_TIME,
        id,
        arrivalTime,
    };
};

export const pointDuration = (id: Id, duration: Duration): SetPointDurationAction => {
    duration = parseInt(duration, 10);
    return {
        type: SET_POINT_DURATION,
        id,
        duration,
    };
};



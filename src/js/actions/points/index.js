// @flow
import {ADD_POINT_INPUT, SET_POINT_PLACE, SET_POINT_DATETIME} from "../actionTypes";

type PointPlace = {
    type: string,
    place: string
};
type PointDatetime = {
    type: string,
    datetime: string
};

export const addPoint = () =>{
    return {
        type: ADD_POINT_INPUT,
    };
};

export const pointPlace = (place: string ): PointPlace => {
    return {
        type: SET_POINT_PLACE,
        place,
    };
};

export const startDatetime = (datetime: string ): PointDatetime => {
    return {
        type: SET_POINT_DATETIME,
        datetime,
    };
};



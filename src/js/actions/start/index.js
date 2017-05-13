// @flow
import {SET_START_PLACE, SET_START_DATETIME} from "../actionTypes";

type StartPlace = {
    type: string,
    place: string
};
type StartDatetime = {
    type: string,
    datetime: string
};

export const startPlace = (place: string ): StartPlace => {
    return {
        type: SET_START_PLACE,
        place,
    };
};

export const startDatetime = (datetime: string ): StartDatetime => {
    return {
        type: SET_START_DATETIME,
        datetime,
    };
};



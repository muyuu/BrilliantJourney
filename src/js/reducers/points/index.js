// @flow
import {ADD_POINT_INPUT, SET_POINT_PLACE, SET_POINT_DATETIME} from "../../actions/actionTypes";

export const points = (state = [], action: string): Array =>{
    switch(action.type){
        case ADD_POINT_INPUT:
            return [
                ...state,
                point(undefined, action)
            ];

        case SET_POINT_PLACE:
            return []

        default:
            return state;
    }
};

const point = (state = {}, action): {} =>{
    switch(action.type){
        case ADD_POINT_INPUT:
            return {
                place: "",
                datetime: "",
                duration: 0
            };

        case SET_POINT_PLACE:
            return Object.assign({}, state, {place: action.place});

        case SET_POIT_DATETIME:
            return Object.assign({}, state, {datetime: action.datetime});
    }
};

// @flow
import {SET_START_PLACE, SET_START_DATETIME} from "../../actions/actionTypes";

export const startPlace = (state = {}, action) =>{
    switch(action.type){
        case SET_START_PLACE:
            return Object.assign({}, state, {place: action.place});

        case SET_START_DATETIME:
            return Object.assign({}, state, {datetime: action.datetime});

        default:
            return state;
    }
};


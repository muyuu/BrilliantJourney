import {
    ADD_POINT_INPUT,
    SET_POINT_PLACE,
    SET_POINT_ARRIVAL_TIME,
    SET_POINT_DURATION,
    REQUEST_POINT,
    RECEIVE_POINT,
    CLEAR_SUGGESTED_TEXT
} from "../actions";
import {point} from './point';

export const points = (state = [], action) =>{
    switch(action.type){
        case ADD_POINT_INPUT:
            return [
                ...state,
                point(undefined, action)
            ];

        case SET_POINT_PLACE:
        case SET_POINT_ARRIVAL_TIME:
        case SET_POINT_DURATION:
        case REQUEST_POINT:
        case RECEIVE_POINT:
        case CLEAR_SUGGESTED_TEXT:
            return state.map((v) => {
                if(v.id !== action.id) return v;

                return point(v, action);
            });

        default:
            return state;
    }
};

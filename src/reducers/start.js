import shortId from 'shortid';
import {
    SET_POINT_PLACE,
    SET_POINT_DEPARTURE_TIME,
    REQUEST_POINT,
    RECEIVE_POINT,
    CLEAR_SUGGESTED_TEXT
} from "../actions";
import  {suggestPoint} from "./suggestPoint";

const initialState = {
    id: shortId(),
    placeId: '',
    name: '',
    suggested: {isFetching: false, items: [], lastUpdate: 0},
    departureTime: 0
};

export const start = (state = initialState, action) =>{
    switch(action.type){
        case REQUEST_POINT:
        case RECEIVE_POINT:
        case CLEAR_SUGGESTED_TEXT:
            if(state.id !== action.id) return state;

            return Object.assign({}, state, {
                suggested: suggestPoint(state.suggested, action)
            });
            
        case SET_POINT_PLACE:
            if(state.id !== action.id) return state;

            return Object.assign({}, state, {
                name: action.name,
                placeId: action.placeId,
            });
            
        case SET_POINT_DEPARTURE_TIME:
            if(state.id !== action.id) return state;

            return Object.assign({}, state, {
                departureTime: action.departureTime,
            });


        default:
            return state;
    }
};

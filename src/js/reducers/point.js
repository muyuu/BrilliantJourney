import {
    ADD_POINT_INPUT,
    SET_POINT_PLACE,
    SET_POINT_ARRIVAL_TIME,
    SET_POINT_DURATION,
    REQUEST_POINT,
    RECEIVE_POINT,
    CLEAR_SUGGESTED_TEXT
} from "../actions/actionTypes";
import  {suggestPoint} from "./suggestPoint";

export const point = (state, action) =>{
    switch(action.type){
        case ADD_POINT_INPUT:
            return {
                id: action.id,
                name: '',
                placeId: '',
                arrivalTime: 0,
                duration: 0,
                suggested: {
                    isFetching: false,
                    items: [],
                    lastUpdated: 0,
                },
            };

        case SET_POINT_PLACE:
            return Object.assign({}, state, {
                name: action.name,
                placeId: action.placeId,
            });

        case SET_POINT_ARRIVAL_TIME:
            return Object.assign({}, state, {arrivalTime: action.arrivalTime});

        case SET_POINT_DURATION:
            return Object.assign({}, state, {duration: action.duration});

        case REQUEST_POINT:
        case RECEIVE_POINT:
        case CLEAR_SUGGESTED_TEXT:
            return Object.assign({}, state, {suggested: suggestPoint(state.suggested, action)});


        default:
            return state;
    }
};

import {
    REQUEST_DIRECTION,
    RECEIVE_DIRECTION,
    REQUEST_DIRECTION_FOR_MAP,
    RECEIVE_DIRECTION_FOR_MAP,
} from "../actions";

const initialState = {
    isFetching: false,
    json: null,
};

export const direction = (state = initialState, action) =>{
    switch(action.type){

        case REQUEST_DIRECTION:
            return Object.assign({}, state, {
                isFetching: true,
            });

        case RECEIVE_DIRECTION:
            return Object.assign({}, state, {
                isFetching: false,
                json: action.json,
            });

        case REQUEST_DIRECTION_FOR_MAP:
            return Object.assign({}, state, {
                isFetching: true,
                requestMapParam: action.requestMapParam,
            });

        case RECEIVE_DIRECTION_FOR_MAP:
            return Object.assign({}, state, {
                isFetching: false,
                directionResult: action.directionResult,
            });

        default:
            return state;
    }
};

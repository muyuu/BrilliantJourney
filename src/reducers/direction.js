import {
    REQUEST_DIRECTION,
    RECEIVE_DIRECTION,
} from "../actions/actionTypes";

const initialState = {
    fetching: false,
    json: null,
};

export const start = (state = initialState, action) =>{
    switch(action.type){

        case REQUEST_DIRECTION:
            return Object.assign({}, state, {
                fetching: true,
            });

        case RECEIVE_DIRECTION:
            return Object.assign({}, state, {
                fetching: false,
                json: action.json,
            });

        default:
            return state;
    }
};

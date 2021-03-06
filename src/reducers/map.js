import {
    REQUEST_MAP,
    RECEIVE_MAP,
} from "../actions";

const initialState = {
    ltlng: null,
    requestObj: {},
    fetched: false,
};

export const map = (state = initialState, action) =>{
    switch(action.type){
        case REQUEST_MAP:
            return Object.assign({}, state, {
                fetched: false,
                ltlng: null,
                requestObj: action.requestObj,
            });
            
            case RECEIVE_MAP:
            return Object.assign({}, state, {
                requestObj: {},
                fetched: true,
                ltlng: action.ltlng,
            });

        default:
            return state;
    }
};

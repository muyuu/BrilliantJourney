// @flow
import {
    REQUEST_POINT_NAME_SUGGEST,
    RECEIVE_POINT_NAME_SUGGEST,
    CLEAR_SUGGESTED_TEXT,
} from "../../actions/actionTypes";
import type {SuggestedPointName} from '../../types/suggestedPointName';

const initialState = {
    isFetching: false,
    items: [],
    lastUpdated: 0,
};

export const suggestPointName = (state: SuggestedPointName = initialState, action: Object): SuggestedPointName =>{
    switch(action.type){
        case REQUEST_POINT_NAME_SUGGEST:
            return Object.assign({}, state, {
                isFetching: true,
            });

        case RECEIVE_POINT_NAME_SUGGEST:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.suggestedWords,
                lastUpdated: action.receivedAt,
            });

        case CLEAR_SUGGESTED_TEXT:
            return Object.assign({}, state, {
                isFetching: false,
                items: [],
                lastUpdated: action.receivedAt,
            });

        default:
            return state;
    }
};


// @flow
import fetch from 'isomorphic-fetch';
import {
    REQUEST_POINT_NAME_SUGGEST,
    RECEIVE_POINT_NAME_SUGGEST,
    CLEAR_SUGGESTED_TEXT,
} from "../actionTypes";
import type {SuggestedWords} from '../../types/suggestedPointName';

const requestPointNameSuggest = (id: string, requestWord: string): {type: string, requestWord: string} =>{
    return {
        type: REQUEST_POINT_NAME_SUGGEST,
        requestWord,
        id,
    };
};

const receivePointNameSuggest = (id: string, suggestedWords: Array<Object> ): SuggestedWords => {
    return {
        type: RECEIVE_POINT_NAME_SUGGEST,
        suggestedWords,
        id,
        receivedAt: Date.now(),
    };
};

export const fetchSuggestedPointName = (id: string, requestWord: string) =>{
    return function(dispatch: Function){
        let url = `/api/place?q=${requestWord}`;

        dispatch(requestPointNameSuggest(id, requestWord));

        return fetch(url)
            .then(response => response.json())
            .then(json => {
                const places = json.predictions;
                dispatch(receivePointNameSuggest(id, places));
            });
    };
};

export const clearSuggestedText = (id: string): {type: string, receivedAt: number} =>{
    return {
        type: CLEAR_SUGGESTED_TEXT,
        id,
        receivedAt: Date.now(),
    };
};

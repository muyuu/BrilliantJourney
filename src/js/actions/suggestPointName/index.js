// @flow
import fetch from 'isomorphic-fetch';
import {
    REQUEST_POINT_NAME_SUGGEST,
    RECEIVE_POINT_NAME_SUGGEST,
    CLEAR_SUGGESTED_TEXT,
} from "../actionTypes";
import type {SuggestedWords} from '../../types/suggestedPointName';

const requestPointNameSuggest = (requestWord: string): {type: string, requestWord: string} =>{
    return {
        type: REQUEST_POINT_NAME_SUGGEST,
        requestWord
    };
};

const receivePointNameSuggest = (suggestedWords: Array<Object> ): SuggestedWords => {
    return {
        type: RECEIVE_POINT_NAME_SUGGEST,
        suggestedWords,
        receivedAt: Date.now(),
    };
};

export const fetchSuggestedPointName = (requestWord: string) =>{

    return function(dispatch: Function){
        let url = `/api/place?q=${requestWord}`;

        dispatch(requestPointNameSuggest(requestWord));

        return fetch(url)
            .then(response => response.json())
            .then(json => {
                const places = json.predictions;
                dispatch(receivePointNameSuggest(places));
            });
    };
};

export const clearSuggestedText = (): {type: string, receivedAt: number} =>{
    return {
        type: CLEAR_SUGGESTED_TEXT,
        receivedAt: Date.now(),
    };
};

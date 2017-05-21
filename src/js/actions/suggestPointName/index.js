// @flow
import fetch from 'isomorphic-fetch';
import {
    REQUEST_POINT_NAME_SUGGEST,
    RECEIVE_POINT_NAME_SUGGEST,
    CLEAR_SUGGESTED_TEXT,
} from "../actionTypes";
import {SuggestedWords} from '../../types/suggestedPointName';

const requestPointNameSuggest = (requestWord: string) =>{
    return {
        type: REQUEST_POINT_NAME_SUGGEST,
        requestWord
    };
};

const receivePointNameSuggest = (suggestedWords: Array<string> ): SuggestedWords => {
    return {
        type: RECEIVE_POINT_NAME_SUGGEST,
        suggestedWords,
        receivedAt: Date.now(),
    };
};

export const fetchSuggestedPointName = (requestWord: string) =>{

    return function(dispatch){
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

export const clearSuggestedText = () =>{
    return {
        type: CLEAR_SUGGESTED_TEXT,
        receivedAt: Date.now(),
    };
};

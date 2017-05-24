// @flow
import fetch from 'isomorphic-fetch';
import {
    REQUEST_POINT,
    RECEIVE_POINT,
    CLEAR_SUGGESTED_TEXT,
} from "./actionTypes";
import type {SuggestedWords} from '../types/suggestedPointName';

const requestPoint = (id: string, requestWord: string): {type: string, requestWord: string} =>{
    return {
        type: REQUEST_POINT,
        requestWord,
        id,
    };
};

const receivePoint = (id: string, suggestedWords: Array<Object> ): SuggestedWords => {
    return {
        type: RECEIVE_POINT,
        suggestedWords,
        id,
        receivedAt: Date.now(),
    };
};

export const fetchPoint = (id: string, requestWord: string) =>{
    return function(dispatch: Function){
        let url = `/api/place?q=${requestWord}`;

        dispatch(requestPoint(id, requestWord));

        return fetch(url)
            .then(response => response.json())
            .then(json => {
                const places = json.predictions;
                dispatch(receivePoint(id, places));
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

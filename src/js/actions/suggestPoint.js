import fetch from 'isomorphic-fetch';
import {
    REQUEST_POINT,
    RECEIVE_POINT,
    CLEAR_SUGGESTED_TEXT,
} from "./actionTypes";

const requestPoint = (id, requestWord) =>{
    return {
        type: REQUEST_POINT,
        requestWord,
        id,
    };
};

const receivePoint = (id, suggestedWords) => {
    return {
        type: RECEIVE_POINT,
        suggestedWords,
        id,
        receivedAt: Date.now(),
    };
};

export const fetchPoint = (id, requestWord) =>{
    return function(dispatch){
        let url = `/api/place?q=${requestWord}`;

        dispatch(requestPoint(id, requestWord));

        return fetch(url)
            .then(response => response.json())
            .then(json => {
                const places = json.predictions.map((v)=>{
                    return {
                        description: v.description,
                        place_id: v.place_id,
                    };
                });
                dispatch(receivePoint(id, places));
            });
    };
};

export const clearSuggestedText = (id) =>{
    return {
        type: CLEAR_SUGGESTED_TEXT,
        id,
        receivedAt: Date.now(),
    };
};

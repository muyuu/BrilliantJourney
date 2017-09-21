import fetch from 'isomorphic-fetch';
import {REQUEST_SEARCH, RECEIVE_SEARCH,} from "./actionTypes";

const requestSearch = (url) =>{
    return {
        type: REQUEST_SEARCH,
        url,
    };
};

const receiveSearch = (id, suggestedWords) =>{
    return {
        type      : RECEIVE_SEARCH,
        suggestedWords,
        id,
        receivedAt: Date.now(),
    };
};

export const fetchSearch = () =>{
    return function(dispatch){
        let url = `/api/place?q=`;

        dispatch(requestSearch(url));

        return fetch(url)
            .then(response => response.json())
            .then(json =>{
                dispatch(receiveSearch());
            });
    };
};


// @flow
import {
    REQUEST_MAP,
    RECEIVE_MAP,
} from "../actions/actionTypes";

export type Id = string;
export type Fetched = boolean;
export type PlaceId = string;
export type Ltlng = any;
export type RequestObj = {
    address: string;
};

export type MapState = {
    map: {
        ltlng: Ltlng,
        requestObj: RequestObj,
        fetched: Fetched,
    }
}

export type RequestMapAction = {
    type: REQUEST_MAP,
    id: Id,
    requestObj: RequestObj,
    fetched: Fetched,
};

export type ReceiveMapAction = {
    type: RECEIVE_MAP,
    id: Id,
    ltlng: Ltlng,
    placeId: PlaceId,
    fetched: Fetched,
}


export type MapAction =
    | RequestMapAction
    | ReceiveMapAction

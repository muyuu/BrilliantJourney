// @flow
import {
    ADD_POINT_INPUT,
    SET_POINT_PLACE,
    SET_POINT_ARRIVAL_TIME,
    SET_POINT_DEPARTURE_TIME,
    SET_POINT_DURATION,
} from "../actions/actionTypes";

import type {Suggested} from './suggested';

export type Id = string;
export type Name = string;
export type PlaceId = string;
export type DepartureTime = number;
export type ArrivalTime = number;
export type Duration = number;

export type Point = {
    id: Id,
    placeId: PlaceId,
    name: Name,
    suggested: Suggested,
    arrivalTime: ArrivalTime,
    duration: Duration,
    departureTime: DepartureTime,
}

export type Points = Point[];

export type PointState = {
    points: Points
}

export type AddPointInputAction = {
    type: ADD_POINT_INPUT,
    id: Id
};

export type SetPointPlaceAction = {
    type: SET_POINT_PLACE,
    id: Id,
    name: Name,
    placeId: PlaceId,
}

export type SetPointDepartureTimeAction = {
    type: SET_POINT_DEPARTURE_TIME,
    id: Id,
    departureTime: DepartureTime,
}

export type SetPointArrivalTimeAction = {
    type: SET_POINT_ARRIVAL_TIME,
    id: Id,
    arrivalTime: ArrivalTime,
}

export type SetPointDurationAction = {
    type: SET_POINT_DURATION,
    id: Id,
    duration: Duration,
}

export type PointAction =
    | AddPointInputAction
    | SetPointPlaceAction
    | SetPointDepartureTimeAction
    | SetPointArrivalTimeAction
    | SetPointDurationAction;


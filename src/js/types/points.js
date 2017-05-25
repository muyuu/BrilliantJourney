// @flow
import {Suggested} from './suggested';

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

export type Points = Array<Point>;

export type PointState = {
    points: Points
}

export type PointAction =
    | {type: 'ADD_POINT_INPUT', id: Id}
    | {type: 'SET_POINT_PLACE', id: Id, name: Name, placeId: PlaceId}
    | {type: 'SET_POINT_DEPARTURE_TIME', id: Id, departureTime: DepartureTime}
    | {type: 'SET_POINT_DEPARTURE_TIME', id: Id, arrivalTime: ArrivalTime}
    | {type: 'SET_POINT_DURATION', id: Id, duration: Duration}


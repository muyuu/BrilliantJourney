// @flow
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

export type Points = Array<Point>;

export type PointState = {
    points: Points
}

export type PointAction =
    | {type: string, id: Id}
    | {type: string, id: Id, name: Name, placeId: PlaceId}
    | {type: string, id: Id, departureTime: DepartureTime}
    | {type: string, id: Id, arrivalTime: ArrivalTime}
    | {type: string, id: Id, duration: Duration}


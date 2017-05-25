// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

export type PointAction = {
    type: string,
    id: string,
    place: string,
    arrivedAt: number,
    duration: number,
}
export type PointObj = {
    id: string,
    place: string,
    arrivedAt: number,
    duration: number,
    suggested: Object,
}

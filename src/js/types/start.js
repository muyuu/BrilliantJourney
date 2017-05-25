// @flow
import {PlaceElement} from './suggested';

export type Start = {
    id: string,
    name: string,
    placeId: string,
    departureTime: number,
    suggested: PlaceElement,
}

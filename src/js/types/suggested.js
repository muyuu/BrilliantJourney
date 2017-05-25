// @flow

export type PlaceElement = {
    place_id: string,
    description: string,
}

export type Suggested = {
    isFetching: boolean,
    items: Array<PlaceElement>,
    lastUpdate: number,
}

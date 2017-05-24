// @flow

export type SuggestedItems = {
    isFetching: boolean,
    items: Array<string>,
    lastUpdate: number,
}

export type AppState = {
    start: {
        placeId: string,
        name: string,
        suggested: SuggestedItems,
        departureTime: number,
    },
    points: Array<{
        placeId: string,
        name: string,
        suggested: SuggestedItems,
        arrivalTime: number,
        duration: number,
        departureTime: number,
    }>
}


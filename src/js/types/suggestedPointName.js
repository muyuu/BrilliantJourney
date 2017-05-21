// @flow

export type SuggestedPointName = {
    isFetching: boolean,
    items: Array<string>,
    lastUpdate: number,
}

export type SuggestedWords = {
    type: string,
    suggestedWords: Array<Object>,
    receivedAt: number,
}

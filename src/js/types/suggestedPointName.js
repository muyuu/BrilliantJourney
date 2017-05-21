// @flow

export type SuggestedPointName = {
    isFetching: boolean,
    items: Array<string>,
}

export type SuggestedWords = {
    type: string,
    suggestedWords: Array<any>,
    receivedAt: string,
}

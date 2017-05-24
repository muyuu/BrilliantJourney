// @flow
import {combineReducers} from 'redux';
import {points} from './points';
import {siteInfo} from './siteInfo';

const reducers = combineReducers({
    siteInfo,
    points,
});

export default reducers;


// app state sample
/* eslint-disable */
const stateSample = {
    points: [
        {
            id       : "abcdefghijklmn", // use shortId
            place    : "Tokyo",
            arrivedAt: 1234567890, // timestamp
            duration : 1234567890, // msec
            mode     : 'DRIVING', // string(DRIVING, BICYCLING, TRANSIT, WALKING)
        }
    ],
    suggestPointName: {
        isFetching: false,
        items: []
    }
};



/**
 * データは極力汎用フォーマットでstateに入れておく
 * アクションで受け取った際、表示する際にエンコード・デコードするイメージ
 * 例) 日付のタイムスタンプ -> relative time
 */

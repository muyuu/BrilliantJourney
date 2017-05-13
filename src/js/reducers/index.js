// @flow
import {combineReducers} from 'redux';
import {points} from './points';
import {siteinfo} from './siteInfo';

const reducers = combineReducers({
    siteinfo,
    points,
});

export default reducers;


// app state sample
/* eslint-disable */
{
    points: [
        {
            id: "abcdefghijklmn", // use shortId
            place: "Tokyo",
            arrivedAt: 1234567890, // timestamp
            duration: 1234567890, // msec
        }
    ]
}

/**
 * データは極力汎用フォーマットでstateに入れておく
 * アクションで受け取った際、表示する際にエンコード・デコードするイメージ
 * 例) 日付のタイムスタンプ -> relative time
 */

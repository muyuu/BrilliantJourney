// @flow
import {combineReducers} from 'redux';
import {start} from './start';
import {points} from './points';
import {siteInfo} from './siteInfo';

const reducers = combineReducers({
    siteInfo,
    start,
    points,
});

export default reducers;

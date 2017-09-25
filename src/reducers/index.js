// @flow
import {combineReducers} from 'redux';
import {start} from './start';
import {points} from './points';
import {siteInfo} from './siteInfo';
import {direction} from './direction';

const reducers = combineReducers({
    siteInfo,
    start,
    points,
    direction,
});

export default reducers;

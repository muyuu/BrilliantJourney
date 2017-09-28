// @flow
import {combineReducers} from 'redux';
import {start} from './start';
import {points} from './points';
import {map} from './map';
import {siteInfo} from './siteInfo';
import {direction} from './direction';

const reducers = combineReducers({
    siteInfo,
    start,
    points,
    map,
    direction,
});

export default reducers;

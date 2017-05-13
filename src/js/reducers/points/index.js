// @flow
import {
    ADD_POINT_INPUT,
    SET_POINT_PLACE,
    SET_POINT_ARRIVED_AT,
    SET_POINT_DURATION,
} from "../../actions/actionTypes";
import type {PointAction, PointObj} from "../../types/points";

export const points: Function = (state: Array<PointObj> = [], action: PointAction): Array<PointObj> =>{
    switch(action.type){
        case ADD_POINT_INPUT:
            return [
                ...state,
                point(undefined, action)
            ];

        case SET_POINT_PLACE:
        case SET_POINT_ARRIVED_AT:
        case SET_POINT_DURATION:
            return state.map(v => {
                if(v.id !== action.id) return v;

                return point(v, action);
            });

        default:
            return state;
    }
};

const point: Function = (state: PointObj, action: PointAction): PointObj =>{
    switch(action.type){
        case ADD_POINT_INPUT:
            return {
                id: action.id,
                place: "",
                arrivedAt: 0,
                duration: 0
            };

        case SET_POINT_PLACE:
            return Object.assign({}, state, {place: action.place});

        case SET_POINT_ARRIVED_AT:
            return Object.assign({}, state, {arrivedAt: action.arrivedAt});

        case SET_POINT_DURATION:
            return Object.assign({}, state, {duration: action.duration});

        default:
            return state;
    }
};

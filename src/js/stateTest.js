import {addPoint, pointPlace, pointArrivedAt, pointDuration} from './actions/points';

/* eslint-disable */
module.exports = (store) => {
    let unsubscribe = store.subscribe(() =>
        console.log(store.getState())
    );

    // set start point
    store.dispatch(addPoint());
    const startId = store.getState().points[0].id;
    store.dispatch(pointPlace(startId, 'Tokyo'));
    store.dispatch(pointArrivedAt(startId, parseInt(new Date('2017/5/1 09:00') / 1000)));

    // set 1st point
    store.dispatch(addPoint());
    const firstId = store.getState().points[1].id;
    store.dispatch(pointPlace(firstId, 'Saitama'));
    store.dispatch(pointArrivedAt(firstId, parseInt(new Date('2017/5/1 12:00') / 1000)));
    store.dispatch(pointDuration(firstId, 123456));

    // set 2nd point
    store.dispatch(addPoint());
    const secondId = store.getState().points[2].id;
    store.dispatch(pointPlace(secondId, 'Gumma'));
    store.dispatch(pointArrivedAt(secondId, parseInt(new Date('2017/5/1 18:00') / 1000)));
    store.dispatch(pointDuration(secondId, 123456));

    // set 3rd point
    store.dispatch(addPoint());
    const endId = store.getState().points[3].id;
    store.dispatch(pointPlace(endId, 'Tokyo'));
    store.dispatch(pointArrivedAt(endId, parseInt(new Date('2017/5/1 22:00') / 1000)));

    unsubscribe();
};


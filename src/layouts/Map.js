// @flow
import React from 'react';
import styles from './map.css';

type MapProps = {
    fetched: boolean;
    ltlng: {};
    requestObj: {};
};

type Porps = {
    siteInfo: {
        name: string;
    };
    map: MapProps;
};

const Map = ({ map }) => {
    const { ltlng, fetched } = map;
    const { mapInstance, markerInstance } = window;

    if ( fetched === true && ltlng ) {
        mapInstance.setCenter(ltlng);
        markerInstance.setPosition(ltlng);
    }
    return (
        <div id="map" className={styles.map}></div>
    );
};

export default Map;

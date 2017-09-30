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
    directionResult: {};
};

const Map = ({ map, directionResult }) => {
    const { ltlng, fetched } = map;

    if ( window.google ) {
        const { mapInstance, markerInstance } = window;
        const direction = new window.google.maps.DirectionsRenderer({
            map: mapInstance,
        });

        if ( directionResult ) {
            direction.setDirections(directionResult);
        } else {
            if ( fetched === true && ltlng ) {
                mapInstance.setCenter(ltlng);
                markerInstance.setPosition(ltlng);
            }
        }
    }
    return (
        <div id="map" className={styles.map}></div>
    );
};

export default Map;

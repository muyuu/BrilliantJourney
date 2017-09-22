import React from 'react';

import Point from '../containers/Point';
import Btn from './atoms/Btn';

const renderPoints = (points) => points.map((point, index) => (
    <div className="point" key={index}>
        <Point index={index} point={point}/>
    </div>
    ));

const Points = ({
    points,
    addPoint,
 }) => (
    <div className="points">
        {renderPoints(points)}
        <Btn label='行きたい場所を追加' onClick={addPoint}/>
    </div>
);


export default Points;

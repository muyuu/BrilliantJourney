import React from 'react';
import SuggestPoint from '../containers/SuggestPoint';

const Point = ({
    index,
    point,
    onChagenDuration,
}) => {
    const onChangeDurationHandler = ({ target: { value }}) => {
        const id = point.id;
        onChagenDuration(id, value);
    };

    return (
        <div className="point">
            <div className="point__place">
                <label>
                    <span>ポイント{index + 1}</span>
                    <SuggestPoint point={point}/>
                </label>
            </div>
            <div className="point__duration">
                <label>
                    <span>滞在時間</span>
                    <input type="number" onChange={(e)=> onChangeDurationHandler(e)}/>
                </label>
            </div>
        </div>
    );
};

export default Point;

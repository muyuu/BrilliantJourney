import React from 'react';
import SuggestPoint from '../containers/SuggestPoint';

const Start = ({
    start,
    onChangeDepartureTime,
}) => {
    const onChangeDepartureTimeHandler = ({ target }) => {
        const id = start.id;
        const departureTime = target.value;
        onChangeDepartureTime(id, departureTime);
    };

    return (
        <div className="point">
            <div className="point__place">
                <label>
                    <span>スタート</span>
                    <SuggestPoint point={start} />
                </label>
            </div>
            <div className="point__arriveAt">
                <label>
                    <span>出発時間</span>
                    <input type="datetime-local" onChange={onChangeDepartureTimeHandler}/>
                </label>
            </div>
        </div>
    );
};

export default Start;

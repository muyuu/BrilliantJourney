import React from 'react';
import {render} from 'react-dom';

import SetPlace from '../containers/SetPlace';

class Point extends React.Component {
    constructor(props){
        super(props);
    }

    onChangeArrivedAtHandler(e){
        const arrivedAt = e.target.value;
        this.props.onChangeArrivedAt(this.props.point.id, arrivedAt);
    }

    onChangeDurationHandler(e){
        const duration = e.target.value;
        this.props.onChagenDuration(this.props.point.id, duration);
    }

    render(){
        // console.log(this.props.point);
        const isFirst = this.props.index === 0;
        const arriveLabel = isFirst ? '出発' : '到着' ;

        let Duration = '';
        if (!isFirst){
            Duration = (
                <div className="point__duration">
                    <label>
                        <span>滞在時間</span>
                        <input type="number" onChange={this.onChangeDurationHandler.bind(this)}/>
                    </label>
                </div>
            );
        }
        return (
            <div className="ponit">

                <div className="point__place">
                    <SetPlace point={this.props.point}/>
                </div>
                <div className="point__arriveAt">
                    <label>
                        <span>{arriveLabel}時間</span>
                        <input type="datetime-local" onChange={this.onChangeArrivedAtHandler.bind(this)}/>
                    </label>
                </div>

                {Duration}
            </div>
        );
    }
}

export default Point;

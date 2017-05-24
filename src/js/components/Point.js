import React from 'react';
import {render} from 'react-dom';
import SuggestPoint from '../containers/SuggestPoint';

class Point extends React.Component {
    constructor(props){
        super(props);
    }

    onChangeDurationHandler(e){
        const id = this.props.point.id;
        const duration = e.target.value;
        this.props.onChagenDuration(id, duration);
    }

    render(){
        return (
            <div className="point">
                <div className="point__place">
                    <label>
                        <span>ポイント{this.props.index + 1}</span>
                        <SuggestPoint point={this.props.point}/>
                    </label>
                </div>
                <div className="point__duration">
                    <label>
                        <span>滞在時間</span>
                        <input type="number" onChange={this.onChangeDurationHandler.bind(this)}/>
                    </label>
                </div>
            </div>
        );
    }
}

export default Point;

import React from 'react';
import {render} from 'react-dom';
import SuggestPoint from '../containers/SuggestPoint';

class Start extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }

    onChangeDepartureTimeHandler(e){
        const id = this.props.start.id;
        const departureTime = e.target.value;
        this.props.onChangeDepartureTime(id, departureTime);
    }

    render(){
        return (
            <div className="point">
                <div className="point__place">
                    <label>
                        <span>スタート</span>
                        <SuggestPoint point={this.props.start} />
                    </label>
                </div>
                <div className="point__arriveAt">
                    <label>
                        <span>出発時間</span>
                        <input type="datetime-local" onChange={this.onChangeDepartureTimeHandler.bind(this)}/>
                    </label>
                </div>
            </div>
        );
    }
}

export default Start;

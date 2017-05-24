import React from 'react';
import {render} from 'react-dom';

import AddPoint from '../containers/AddPoint';
import Point from '../containers/Point';

class Points extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
       this.props.runInitial();
    }

    render(){
        let points = this.props.points.map((point, index) =>{
            let label = `ポイント${index}`;
            if(index === 0) label = '出発地点';

            return(
                <div className="point" key={index}>
                    <div className="point__head">
                        <span>■ {label}</span>
                    </div>
                    <Point index={index} point={point}/>
                </div>
            );
        });

        return (
            <div className="ponits">
                {points}
                <AddPoint/>
            </div>
        );
    }
}

export default Points;

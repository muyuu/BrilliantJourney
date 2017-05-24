import React from 'react';
import {render} from 'react-dom';

import AddPoint from '../containers/AddPoint';
import Point from '../containers/Point';

class Points extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        let points = this.props.points.map((point, index) =>{
            let label = `ポイント${index+1}`;

            return(
                <div className="point" key={index}>
                    <Point index={index} point={point}/>
                </div>
            );
        });

        return (
            <div className="points">
                {points}
                <AddPoint/>
            </div>
        );
    }
}

export default Points;

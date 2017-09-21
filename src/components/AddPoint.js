import React from 'react';

class AddPoint extends React.Component {
    constructor(props){
        super(props);
    }

    handleClick(){
        this.props.addPoint();
    }

    render(){
        return (
            <div className="addPonit">
                <button onClick={this.handleClick.bind(this)}>add point</button>
            </div>
        );
    }
}

export default AddPoint;

import React from 'react';
import {render} from 'react-dom';


class SuggestPoint extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            text: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e){
        this.setState({
            text: e.target.value
        });

        this.props.onChangeText(this.props.point.id, encodeURI(e.target.value));
    }

    selectPlace(v){
        this.setState({
            text: v.description
        });
        this.props.onApply(this.props.point.id, v);
        this.props.clearSuggestedText(this.props.point.id);
    }


    render(){
        let places = this.props.point.suggested.items.map(v =>{
            console.log(v);
            return(
                <li key={v.place_id} onClick={ ()=> this.selectPlace(v)}>
                    {v.description}
                </li>
            );
        });

        return (
            <div className="suggestPoint">
                <div className="suggestPoint__input">
                    <input type="text" onChange={this.handleChange} value={this.state.text}/>
                </div>
                <div className="suggestPoint__suggest">
                    <ul className="suggestPoint__list">
                        {places}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SuggestPoint;

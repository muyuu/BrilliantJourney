import React from 'react';
import {render} from 'react-dom';


class SetPlace extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            text: "",
            places: [],
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
        this.props.onApplyText(this.props.point.id, v.description);
        this.props.clearSuggestedText(this.props.point.id);
    }


    render(){
        let places = this.props.point.suggested.items.map(v =>{
            return(
                <li key={v.place_id} onClick={ ()=> this.selectPlace(v)}>
                    {v.description}
                </li>
            );
        });

        return (
            <div className="setPlace">
                <div className="setPlace__input">
                    <input type="text" onChange={this.handleChange} value={this.state.text}/>
                </div>
                <div className="setPlace__suggest">
                    <ul className="setPlace__list">
                        {places}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SetPlace;

import React from 'react';

class SuggestPoint extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            text: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const value = e.target.value;
        const { point, fetchPoint, setInputedText} = this.props;

        this.setState({
            text: value
        });

        fetchPoint(point.id, encodeURI(value));
        setInputedText(point.id, {description: value, place_id: null});
    }

    selectPlace(v){
        const { point, setInputedText, clearSuggestedText } = this.props;

        this.setState({
            text: v.description
        });

        setInputedText(point.id, v);
        clearSuggestedText(point.id);
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

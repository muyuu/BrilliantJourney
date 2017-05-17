// @flow
import React from 'react';
import {render } from 'react-dom';
import fetch from 'isomorphic-fetch';


class SetPlace extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            text: "",
            places: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.fetchGmapPlace = this.fetchGmapPlace.bind(this);

        this.fetchGmapPlace('abc');
    }


    handleChange(e){
        this.setState({
            text: e.target.value
        });

        this.fetchGmapPlace(encodeURI(e.target.value));
    }

    fetchGmapPlace(text){
        let url = `/api/place?q=${text}`;

        return fetch(url)
            .then(response => response.json())
            .then(json => {
                const places = json.predictions;
                this.setState({places});
            });
    }

    render(){
        let places = this.state.places.map(v =>{
            return(
                <li key={v.place_id}>
                    {v.description}
                </li>
            );
        });

        return (
            <div className="setPlace">
                <div className="setPlace__input">
                    <input type="text" onChange={this.handleChange}/>
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

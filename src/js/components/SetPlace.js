// @flow
import React from 'react';
import {render } from 'react-dom';
import fetch from 'isomorphic-fetch';

import googleapi from '../conf/googleapis';


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
        let text1 = '%E5%9F%BC%E7%8E%89%E7%9C%8C%E9%B6%B4%E3%83%B6%E5%B3%B6%E5%B8%82%E6%9D%BE%E3%83%B6%E4%B8%985%E2%88%923-11';
        let url = `/api/place?q=${text1}`;

        return fetch(url)
            .then(response => response.text())
            .then(json => {
                console.log(json);
            });
    }

    render(){
        let items = '';

        return (
            <div className="setPlace">
                <div className="setPlace__input">
                    <input type="text" onChange={this.handleChange}/>
                </div>
                <div className="setPlace__suggest">
                    <ul className="setPlace__list">
                        {items}
                    </ul>
                </div>
            </div>
        );
    }
};

export default SetPlace;

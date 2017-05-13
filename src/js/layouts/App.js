// @flow
import React from 'react';
import {render} from 'react-dom';
import Header from '../containers/layouts/Header';
import Map from '../containers/layouts/Map';
import Body from '../containers/layouts/Body';
import Footer from '../containers/layouts/Footer';

const App = () => {
    return (
        <div className="page">
            <Header />

            <div className="body">
                <Map />
                <Body />
            </div>

            <Footer />
        </div>
    );
};

export default App;

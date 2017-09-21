// @flow
import React from 'react';

import Header from '../containers/layouts/Header';
import Body from '../containers/layouts/Body';
import Footer from '../containers/layouts/Footer';
import styles from './app.css';

const App = () => {
    return (
        <div className="page">
            <Header />  

            <div className="body">
                <div id="map"></div>
                <Body className={styles.wrapper} />
            </div>

            <Footer />
        </div>
    );
};

export default App;

// @flow
import React from 'react';
import Header from '../containers/layouts/Header';
import Body from '../containers/layouts/Body';
import Footer from '../containers/layouts/Footer';
import styles from './app.css';

const App = () => (
    <div className={styles.wrapper}>
        <div className={styles.header}>
            <Header />
        </div>
        
        <div className={styles.body}>
            <div className={styles.content}>
                <Body />
            </div>
            <div id="map" className={styles.map}></div>
        </div>
        
        <div className={styles.footer}>
            <Footer />
        </div>
    </div>
);

export default App;

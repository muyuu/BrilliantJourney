// @flow
import React from 'react';
import Header from '../containers/layouts/Header';
import Body from '../containers/layouts/Body';
import Map from '../containers/layouts/Map';
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
            <div className={styles.map}>
                <Map />
            </div>
        </div>
        
        <div className={styles.footer}>
            <Footer />
        </div>
    </div>
);

export default App;

// @flow
import React from 'react';
import {render} from 'react-dom';
import styles from './footer.css';

const Footer = (props: {siteInfo: {name: string}}) => {
    return (
        <div className="footer">
            <div className={styles.copyright}>
                <p>{props.siteInfo.name}. All right reserved.</p>
            </div>
        </div>
    );
};

export default Footer;

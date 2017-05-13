// @flow
import React from 'react';
import {render} from 'react-dom';

const Footer = props => {
    return (
        <div className="footer">
            <div className="footer__copyright">
                <p>{props.siteInfo.name}. All right reserved.</p>
            </div>
        </div>
    );
};

export default Footer;

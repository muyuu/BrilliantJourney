// @flow
import React from 'react';
import {render} from 'react-dom';

const Header = props => {
    return (
        <div className="header">
            <div className="header__title">
                <h1>{props.siteInfo.name}</h1>
            </div>
        </div>
    );
};

export default Header;

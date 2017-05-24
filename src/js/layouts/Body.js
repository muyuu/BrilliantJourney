// @flow
import React from 'react';
import {render} from 'react-dom';

import Points from '../containers/Points';

const Body = (props: {siteInfo: {name: string}}) => {
    return (
        <div className="body">
            <Points />
        </div>
    );
};

export default Body;

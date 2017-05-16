// @flow
import React from 'react';
import {render} from 'react-dom';

import SetPlace from '../components/SetPlace';

const Body = (props: {siteInfo: {name: string}}) => {
    return (
        <div className="body">
            <SetPlace/>
        </div>
    );
};

export default Body;

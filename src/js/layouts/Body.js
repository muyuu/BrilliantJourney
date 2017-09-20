// @flow
import React from 'react';

import Start from '../containers/Start';
import Points from '../containers/Points';

const Body = (props: {siteInfo: {name: string}}) => {
    return (
        <div className="body">
            <Start />
            <Points />
        </div>
    );
};

export default Body;

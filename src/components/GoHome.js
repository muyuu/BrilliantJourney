import React from 'react';

const GoHome = ({
    points,
    start,
    onClick,
 }) => {
    const onClickHandler = ()=>{
        onClick(start, points);
    };
    return (
        <div className="">
            <button onClick={onClickHandler}>go home</button>
        </div>
    );
};


export default GoHome;

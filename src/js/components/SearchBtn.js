import React from 'react';

const SearchBtn = props =>{
    const handleClick = () =>{
        this.props.addPoint();
    };

    return (
        <div className="searchBtn">
            <button onClick={handleClick}>search</button>
        </div>
    );
};

export default SearchBtn;

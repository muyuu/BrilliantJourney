import React from 'react';

const Btn = ({
    className,
    label,
    onClick,
}) => (
    <button className={className} onClick={onClick}>
        {label}
    </button>
);

export default Btn;


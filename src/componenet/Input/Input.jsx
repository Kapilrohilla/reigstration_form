import React, { memo } from 'react';
import "./input.css";

const Input = ({ type, name, id, value, handleChange }) => {
    console.log("input");
    return (
        <input
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={handleChange}
        />
    )
}

export default memo(Input)

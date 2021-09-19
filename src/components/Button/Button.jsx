import React from "react";

import './Button.scss';

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {

    return (
        <button type={type} onClick={onClick}>{children}</button>
    )
}

export default Button;
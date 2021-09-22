import React from "react";

import './Button.scss';

const Button = ({ children, color, ...attrs }) => {

    const BUTTON_COLOR = {
        PRIMARY: 'btn-primary',
        SECONDARY: 'btn-secondary',
        TRANSPARENT: 'btn-transparent'
    }

    const colorClassName = BUTTON_COLOR[color || 'PRIMARY'];

    return (
        <button 
            className={"btn " + colorClassName}
            {...attrs}
        >
            {children}
        </button>
    )
}

export default Button;
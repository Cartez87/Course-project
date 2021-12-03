import React from "react";
import propTypes from 'prop-types';

import './Button.scss';

const Button = ({ disabled, onClick, text, color, ...attrs }) => {

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
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  disabled: propTypes.bool,
  onClick: propTypes.func
}

export default Button;
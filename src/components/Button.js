import React from 'react';
import './Button.css'

function Button(props) {
  return (
    <button className="sweButton p2">{props.label}</button>
  );
}

export default Button;
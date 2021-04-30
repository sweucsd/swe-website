import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
  const { label } = props;
  return (
    <button type="button" className="sweButton p2">{label}</button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;

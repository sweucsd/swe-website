import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
  const { label, secondary } = props;
  return (
    <button
      type="button"
      className={`${secondary ? 'secondaryBtn' : 'primaryBtn'}`}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  secondary: false,
};

export default Button;

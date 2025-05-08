import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
  const {
    label,
    color,
    bgColor,
    children,
  } = props;
  return (
    <button
      type="button"
      style={{
        '--button-color': color,
        '--button-bgColor': bgColor,
      }}
    >
      {children && <span className="buttonIcon">{children}</span>}
      <span>{label}</span>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  color: 'var(--light-purple)',
  bgColor: 'var(--purple)',
  children: null,
};

export default Button;

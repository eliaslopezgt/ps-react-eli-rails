import React from 'react';
import PropTypes from 'prop-types';

/** Label with required field display, htmlFor */
function Label({htmlFor, label}) {
  return (
    <label htmlFor={htmlFor}>
      {label}
    </label>
  );
}

Label.propTypes = {
  /** HTML ID for associated input */
  htmlFor: PropTypes.string.isRequired,

  /** Label text */
  label: PropTypes.string.isRequired,

};

export default Label;

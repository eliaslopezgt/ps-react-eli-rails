import React from 'react';
import PropTypes from 'prop-types';

/** Label with required field display, htmlFor */
function SubmitButton({className, label, iconClassName}) {
  return (
    <button className={className} type="submit">
      {label}
      <i className={iconClassName}/>
    </button>
  );
}

SubmitButton.propTypes = {
  /** ClassName for the button */
  className: PropTypes.string,

  /** Label text */
  label: PropTypes.string.isRequired,

  /** Icon ClassName for the button */
  iconClassName: PropTypes.string
};

export default SubmitButton;

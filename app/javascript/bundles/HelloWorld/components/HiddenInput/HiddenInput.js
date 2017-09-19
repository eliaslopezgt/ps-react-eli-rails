import React from 'react';
import PropTypes from 'prop-types';

/** Hidden Input with name and value */
function HiddenInput({name, value, ...props}) {
  return (
    <input
      name={name}
      value={value}
      type="hidden"
      {...props}/>
  );
}

HiddenInput.propTypes = {

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string,

  /** Value */
  value: PropTypes.any,

};

export default HiddenInput;

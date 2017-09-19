import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';

/** Emailinput with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */
function EmailInput({htmlId, onChange, ...props}) {
  debugger;
  return (
    <TextInput
      htmlId={htmlId}
      cssClass="form-input-wrapper"
      name="EmailAddress"
      label="Email"
      pattern="[\w.\-_]{2,}@[A-Z\w]{2,}\.[a-zA-Z]{2,8}"
      placeholder=""
      required
      title="Example: email@domain.com"
      type="text"
      onChange={onChange}
      {...props}
    />
  );
}

EmailInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Function to call onChange */
  onChange: PropTypes.func,

};

export default EmailInput;

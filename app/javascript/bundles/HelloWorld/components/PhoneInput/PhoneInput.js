import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';

/** PhoneInput with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */
function PhoneInput({htmlId, onChange, ...props}) {
  return (
    <TextInput
      htmlId={htmlId}
      cssClass="form-input-wrapper"
      name="Phone"
      label="Phone Number"
      pattern="(1|001)?[-. ]?\(?([2-9][0-9]{2})\)?[-. ]?([2-9](?!11)[0-9]{2})[-. ]?([0-9]{4})"
      placeholder=""
      required
      title="Example: 555-555-5555"
      type="tel"
      onChange={onChange}
      {...props}
    />
  );
}

PhoneInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Function to call onChange */
  onChange: PropTypes.func,

};

export default PhoneInput;

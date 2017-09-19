import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';

/** Full Name input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */
function FullNameInput({htmlId, onChange, ...props}) {
  return (
    <TextInput
      htmlId={htmlId}
      cssClass="form-input-wrapper"
      name="fullname"
      label="Name (First &amp; Last)"
      pattern="((\b[a-zA-Z][a-zA-Z.,'-]{1,})\s{0,}){1,}$"
      placeholder=""
      required
      title="Example: Firstname Lastname"
      type="text"
      onChange={onChange}
      {...props}
    />
  );
}

FullNameInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Function to call onChange */
  onChange: PropTypes.func,

};

export default FullNameInput;

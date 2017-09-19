import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

/** Text input with integrated label to enforce consistency in layout, error display, label placement, regex pattern and required. */
function TextInput({htmlId, cssClass, label, name, pattern, placeholder, title, type = 'text', onChange, value, children, ...props}) {
  return (
    <div className={cssClass}>
      <input
        id={htmlId}
        name={name}
        pattern={pattern}
        placeholder={placeholder}
        title={title}
        type={type}
        value={value}
        onChange={onChange}
        {...props}/>
      {children}
      <Label htmlFor={htmlId} label={label} />
    </div>
  );
}

TextInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** CSS class for the outer DIV wrapper */
  cssClass: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string,

  /** Regex Validation Pattern */
  pattern: PropTypes.string.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Title Tool Tip for the input */
  title: PropTypes.string.isRequired,

  /** Input type */
  type: PropTypes.oneOf(['text', 'number', 'password', 'tel']),

  /** Function to call onChange */
  onChange: PropTypes.func,

  /** Value */
  value: PropTypes.any,

  /** Child component to display next to the input */
  children: PropTypes.node,

};

export default TextInput;

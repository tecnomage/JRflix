import React from 'react';
import { PropTypes } from 'prop-types';

function FormField({
  label, name, value, handleChange, type, tag,
}) {
  const fieldId = `id_${name};`;
  return (
    <div>
      <label htmlFor={fieldId}>
        {`${label} `}
        :
      </label>
      <input type={type} value={value} name={name} onChange={handleChange} />
    </div>
  );
}

export default FormField;

FormField.defaultProps = {
  type: 'text',
  value: 'text',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

import React from 'react';
import { PropTypes } from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  padding: 16px 16px;
  margin-bottom: 45px;
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
  ${({ hasValue }) => hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
    `
}
`;

function FormField({
  label, name, value, handleChange, type, suggestions,
}) {
  const fieldId = `id_${name};`;
  const isTypedTextArea = type === 'textarea';
  const tag = isTypedTextArea ? 'textarea' : 'input';

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>

        <Input
          as={tag}
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          list={`suggestionFor_${fieldId}`}
        />
        <Label.Text>
          {`${label} `}
          :
        </Label.Text>
        <datalist id={`suggestionFor_${fieldId}`}>
          {suggestions.map((suggestion) => {
            // eslint-disable-next-line no-unused-expressions
            <option value={suggestion}>
            {suggestion}
            </option>;
          })}
        </datalist>
      </Label>
    </FormFieldWrapper>
  );
}

export default FormField;

FormField.defaultProps = {
  type: 'text',
  value: 'text',
  tag: 'text',
  suggestions: [
    'Front End',
    'Back-end,',
  ],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.string.isRequired,
  tag: PropTypes.string,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

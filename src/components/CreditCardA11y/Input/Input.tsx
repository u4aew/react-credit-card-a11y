import React from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';

type InputProps = AriaTextFieldProps & {
  label: string;
  description?: string;
  errorMessage?: string;
  forwardedRef?: React.RefObject<HTMLInputElement>;
};

function Input(props: InputProps) {
  const { label } = props;
  const ref = React.useRef();
  const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(
    props,
    props.forwardedRef ? props.forwardedRef : ref,
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 200 }}>
      <label {...labelProps}>{label}</label>
      <input {...inputProps} ref={ref} />
      {props.description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
          {props.errorMessage}
        </div>
      )}
    </div>
  );
}

export default Input;

import { FC } from 'react';
import { inputProps } from '../types';
import { Field } from 'formik';

const OtherInput: FC<inputProps> = ({
  type,
  className,
  label,
  onChange,
  ...restProps
}) => {
  if (!restProps?.name) {
    return <label>Esperava receber um "name"!</label>;
  }

  if (!restProps?.id) {
    return <label>Esperava receber um "id"!</label>;
  }

  const Input = () => (
    <div className="input-container inputWithIcon inputIconBg">
      <Field
        type={type}
        {...restProps}
        className={`form-input ${className && className}`}
        placeholder=" "
      />
      <label htmlFor={`${restProps.id}`} className="form-label">
        {label}
      </label>
      <i className="fa fa-check" />
    </div>
  );

  return <Input />;
};

export default OtherInput;

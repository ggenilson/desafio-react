import { FC } from 'react';
import { inputProps } from '../types';

const OtherInput: FC<inputProps> = ({
  type,
  className,
  label,
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
      <input
        type={type}
        {...restProps}
        className={`form-input ${className && className}`}
        placeholder=" "
        autoComplete="off"
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
